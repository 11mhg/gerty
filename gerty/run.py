import os, sys
import argparse
from .embed_db import valid_path
from .embedding import get_embeddings
from .llama2 import get_model, get_prompt
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA, ConversationalRetrievalChain 

def run():
    parser = argparse.ArgumentParser(prog="distributive llama2 application", description="A small hack program for fun")
    parser.add_argument("-db", "--database", type=valid_path, help="Cache knowledge base to this file")
    parser.add_argument("--context-length", type=int, default=2048, help="Context length to load the LLama embedding model with")

    args = parser.parse_args()
    
    embeddings = get_embeddings(n_ctx = args.context_length)
    db = FAISS.load_local(args.database, embeddings)

    print("Loaded Knowledge base and embeddings.")

    llama = get_model(n_ctx = args.context_length)

    chain_type_kwargs = {
        "prompt": get_prompt(context=True)
    }

    qa = RetrievalQA.from_chain_type(
        llm = llama,
        chain_type="stuff", 
        retriever=db.as_retriever(), 
        chain_type_kwargs=chain_type_kwargs,
    )

    while True:
        text = input("Query: ")
        output = qa.run(text)
        print(output)
