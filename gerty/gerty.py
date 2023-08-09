import os, sys, json
from .embedding import get_embeddings
from .llm import get_model
from .webscrape import scrape_site
from .prompts import (
    DEFAULT_CONDENSE_QUESTION_TEMPLATE,
    DEFAULT_CONDENSE_QUESTION_VARIABLES,
    DEFAULT_CONVO_SUMMARY_TEMPLATE,
    DEFAULT_CONVO_SUMMARY_VARIABLES,
    DEFAULT_PROMPT_TEMPLATE,
    DEFAULT_PROMPT_VARIABLES
)
from typing import List
from langchain.document_loaders import DirectoryLoader
from langchain.document_loaders.merge import MergedDataLoader
from langchain.retrievers.merger_retriever import MergerRetriever
from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import LLMChainExtractor 
from langchain.document_loaders import UnstructuredURLLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.memory import ConversationSummaryBufferMemory
from langchain import PromptTemplate
from langchain import LLMChain, PromptTemplate
from langchain.chains.conversational_retrieval.base import ConversationalRetrievalChain
from langchain.chains.question_answering import load_qa_chain
from langchain.retrievers import WikipediaRetriever
from langchain.retrievers import BM25Retriever, EnsembleRetriever

class Gerty:
    def __init__(
        self,
        n_ctx: int = 2048,
        prompt_template: str = DEFAULT_PROMPT_TEMPLATE,
        prompt_variables: List[str] = DEFAULT_PROMPT_VARIABLES,
    ):
        self.n_ctx = n_ctx

        self.embedding_model = get_embeddings(n_ctx=self.n_ctx)
        self.language_model = get_model(n_ctx=self.n_ctx)

        self.prompt_template = prompt_template
        self.prompt_variables = prompt_variables
        self.retrievers = []
        self.tools = None 
        self.final_retriever = None

    def get_stuff_prompt(self):

        return PromptTemplate(
            input_variables=self.prompt_variables, template=self.prompt_template
        )

    #def get_map_reduce_prompt(self):
    #    return {
    #            "question_prompt": self.get_stuff_prompt(),
    #            "combine_prompt": PromptTemplate(input_variables=DEFAULT_CONDENSE_PROMPT_VARIABLES, 
    #                                             template=DEFAULT_CONDENSE_PROMPT_TEMPLATE)
    #    }

    def get_qa_model(self, memory=None):
        chain_type_kwargs = {"prompt": self.get_stuff_prompt()}
        #chain_type_kwargs = self.get_map_reduce_prompt()
        return self.__get_conversational_model(chain_type_kwargs, memory=memory)

    def __get_retrievers__(self):
        if len(self.retrievers) == 0 or self.final_retriever is None:
            self.retrievers = []
            self.retrievers.append(self.db.as_retriever(
                search_kwargs={
                    "k": 1 
                })
            )
            #self.retrievers.append(WikipediaRetriever(load_max_docs=1))
            merger_retriever = EnsembleRetriever(
                retrievers=self.retrievers,
                weights = [1/len(self.retrievers)] * len(self.retrievers)
            )
            #MergerRetriever(retrievers=self.retrievers)
            # cluster_filter = EmbeddingsClusteringFilter(
            #    embeddings=self.embedding_model,
            #    num_clusters = 10,
            #    num_closest = 4
            # )
            # reordering = LongContextReorder()
            # filter_pipeline = DocumentCompressorPipeline(transformers=[cluster_filter, reordering])
            compressor = LLMChainExtractor.from_llm( self.language_model )
            compression_retriever = ContextualCompressionRetriever(
                base_compressor = compressor,
                base_retriever = merger_retriever
            )
            self.final_retriever = compression_retriever #merger_retriever  # compression_retriever
        return self.final_retriever

    def __get_conversational_model(self, chain_type_kwargs, memory=None):
        if memory is None:
            memory = ConversationSummaryBufferMemory(
                llm=self.language_model,
                memory_key="chat_history",
                ai_prefix="Assistant",
                return_messages=True,
                max_token_limit=512,
                prompt=PromptTemplate(input_variables=DEFAULT_CONVO_SUMMARY_VARIABLES,
                                      template = DEFAULT_CONVO_SUMMARY_TEMPLATE ),
            )
        doc_chain = load_qa_chain(
            self.language_model,
            chain_type="stuff",
            verbose = False, #True,
            callbacks = None,
            **chain_type_kwargs
        )

        condense_question_chain = NoOpLLMChain(self.language_model)

        return ConversationalRetrievalChain(
            retriever = self.__get_retrievers__(),
            combine_docs_chain = doc_chain,
            question_generator = condense_question_chain,
            callbacks=None,
            memory = memory,
        )

    def embed_db(self, knowledge_base, cache_dir, url=False, chunk_size=1000, **kwargs):
        loaders = []

        if url:
            _kbs = []
            for kb in knowledge_base:
                _kbs = scrape_site(kb, _kbs)
            knowledge_base = _kbs

            loader = UnstructuredURLLoader(urls=knowledge_base)
        else:
            for kb in knowledge_base:
                loader = DirectoryLoader(kb, glob=kwargs["glob"])
                loaders.append(loader)
            loader = MergedDataLoader(loaders=loaders)
        documents = loader.load()

        text_splitter = CharacterTextSplitter(chunk_size=chunk_size, separator="\n", chunk_overlap=200)
        docs = text_splitter.split_documents(documents)

        self.db = FAISS.from_documents(docs, self.embedding_model)
        if cache_dir:
            self.db_cache_dir = cache_dir
            self.db.save_local(self.db_cache_dir)
            db_name = input("What is the name of this db? ")
            db_name = db_name.replace("\n", "").replace(" ", "-")
            db_description = input(
                "What is the description of this dataset? When should it be used? "
            )
            self.db_config = {"name": db_name, "description": db_description}
            #with open(os.path.join(self.db_cache_dir, "config.toml"), 'w') as f:
            #    f.write(f"name = \"{self.db_config['name']}\"\n")
            #    f.write(f"description = \"{self.db_config['description']}\"\n")
        return

    def load_db(self, cache_dir=None):
        if cache_dir:
            self.db_cache_dir = cache_dir
            #with open(os.path.join(self.db_cache_dir, "config.toml"), 'r') as f:
            #    self.db_config = toml.loads("".join(f.readlines()))
        self.db = FAISS.load_local(self.db_cache_dir, self.embedding_model)
        return


class NoOpLLMChain(LLMChain):
    """No-op LLM chain."""
    def __init__(self, llm):
        super().__init__(llm=llm, prompt=PromptTemplate(template="", input_variables=[]))

    async def arun(self, question: str, *args, **kwargs) -> str:
        return question

    def run(self, question: str, *args, **kwargs) -> str:
        return question
