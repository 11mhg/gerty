import os, sys
import argparse
from .embed_db import valid_path
import time

from .gerty import Gerty


def run():
    parser = argparse.ArgumentParser(
        prog="gerty-cli", description="A small hack program for fun"
    )
    parser.add_argument(
        "-db", "--database", type=valid_path, help="Cache knowledge base to this file"
    )
    parser.add_argument(
        "--context-length",
        type=int,
        default=2048,
        help="Context length to load the LLama embedding model with",
    )

    args = parser.parse_args()

    gerty = Gerty(
        n_ctx=args.context_length,
    )
    gerty.load_db(args.database)

    print("Gerty Loaded!")

    #agent_executor = gerty.get_agent()

    #print("Agent loaded!")
    #while True:
    #    query = input("Human: ")
    #    start = time.time()
    #    answer = agent_executor({"input": query })
    #    end = time.time()
    #    print(f"{end - start} seconds - Assistant: ", answer )


    qa = gerty.get_qa_model()

    print("qa loaded")

    while True:
        query = input("Human: ")
        start = time.time()
        answer = qa.run(query)
        end = time.time()
        print(f"{end - start} seconds - Assistant:", answer.strip())
