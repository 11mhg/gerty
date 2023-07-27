import os, sys
import argparse
from .embed_db import valid_path

from .gerty import Gerty

def run():
    parser = argparse.ArgumentParser(prog="gerty-cli", description="A small hack program for fun")
    parser.add_argument("-db", "--database", type=valid_path, help="Cache knowledge base to this file")
    parser.add_argument("--context-length", type=int, default=2048, help="Context length to load the LLama embedding model with")

    args = parser.parse_args()
   
    gerty = Gerty(
        n_ctx = args.context_length, 
        conversational = True 
    )
    gerty.load_db(args.database)

    print("Gerty Loaded!")

    qa = gerty.get_qa_model()
    
    print("qa loaded")

    while True:
        query = input("Human: ")
        answer = qa.run(query)
        print(answer)

