import os, sys
from .embedding import get_embeddings
from .llm import get_model
from .webscrape import scrape_site
from typing import List
from langchain.document_loaders import DirectoryLoader
from langchain.document_loaders.merge import MergedDataLoader
from langchain.retrievers.merger_retriever import MergerRetriever
from langchain.document_loaders import UnstructuredURLLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.memory import ConversationBufferMemory
from langchain import PromptTemplate
from langchain.chains import RetrievalQA, ConversationalRetrievalChain
from langchain.retrievers import WikipediaRetriever

DEFAULT_PROMPT_TEMPLATE = """The following is a friendly conversation between a human and an AI Assistant. The Assistant is talkative and provides lots of specific details from its context. If the Assistant does not know the answer to a question, it truthfully says it does not know. The Assistant responds to being called Gerty and uses Gerty as a nickname.

Context: {context}

Current conversation:
{chat_history}

Human: {question}
Assistant: """

DEFAULT_PROMPT_VARIABLES = ["question", "context", "chat_history"]

class Gerty:

    def __init__(self, 
        n_ctx: int = 2048,
        prompt_template: str = DEFAULT_PROMPT_TEMPLATE,
        prompt_variables: List[str] = DEFAULT_PROMPT_VARIABLES,
        conversational: bool = True,
    ):
        self.n_ctx = n_ctx

        self.embedding_model = get_embeddings(n_ctx = self.n_ctx)
        #self.language_model  = get_model(n_ctx = self.n_ctx)
        
        self.prompt_template = prompt_template
        self.prompt_variables = prompt_variables
        self.conversational = conversational
        self.retrievers = []

    def get_prompt(self):
        return PromptTemplate(
            input_variables = self.prompt_variables,
            template = self.prompt_template
        )

    def get_qa_model(self):
        chain_type_kwargs = {
            "prompt": self.get_prompt() 
        }
        if self.conversational:
            return self.__get_conversational_model(chain_type_kwargs)
        return self.__get_retrieval_model(chain_type_kwargs)

    def __get_retrievers__(self):
        if len(self.retrievers) == 0:
            self.retrievers.append( self.db.as_retriever() )
            self.retrievers.append( WikipediaRetriever() )
        return MergerRetriever(
            retrievers = self.retrievers 
        )

    
    def __get_conversational_model(self, chain_type_kwargs):
        memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
        return ConversationalRetrievalChain.from_llm(
            llm = self.language_model,
            retriever = self.db.as_retriever(),
            chain_type = "stuff",
            memory = memory,
            combine_docs_chain_kwargs = chain_type_kwargs
        )

    def __get_retrieval_model(self, chain_type_kwargs):
        return RetrievalQA.from_chain_type(
            llm = self.language_model,
            chain_type = "stuff",
            retriever = self.db.as_retriever(),
            chain_type_kwargs = chain_type_kwargs
        )


    def embed_db(self, knowledge_base, cache_dir, url=False, **kwargs):
        loaders = []
        
        if url:
            _kbs = []
            for kb in knowledge_base:
                _kbs = scrape_site(kb, _kbs)
            knowledge_base = _kbs
            
            loader = UnstructuredURLLoader(urls=knowledge_base)
        else:
            for kb in knowledge_base: 
                loader = DirectoryLoader(kb, glob=kwargs['glob'])
                loaders.append(loader)
            loader = MergedDataLoader(loaders=loaders)
        documents = loader.load()

        text_splitter = CharacterTextSplitter(chunk_size=1000, separator="\n")
        docs = text_splitter.split_documents(documents)

        self.db = FAISS.from_documents(docs, self.embedding_model)
        if cache_dir:
            self.db_cache_dir = cache_dir
            self.db.save_local(self.db_cache_dir)
        return

    def load_db(self, cache_dir = None):
        if cache_dir:
            self.db_cache_dir = cache_dir
        self.db = FAISS.load_local(self.db_cache_dir,self.embedding_model)
        return
