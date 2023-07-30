from rq import Connection
from rq.local import LocalStack
from rq.worker import SimpleWorker
from langchain.chains import ConversationalRetrievalChain, RetrievalQA
from langchain.chains.base import Chain
from langchain.memory import ConversationBufferMemory
from langchain.schema import messages_from_dict, messages_to_dict
from langchain.memory.chat_message_histories.in_memory import ChatMessageHistory

import argparse, json, os
from gerty.gerty import Gerty
from gerty.embed_db import valid_path
from typing import Union, Optional

def extract_memory(chain):
    return chain.memory.chat_memory.messages

def serialize_memory(chain: Chain) -> str :
    messages = extract_memory(chain)
    messages = messages_to_dict(messages)
    return json.dumps( messages )

def deserialize_memory(messages_str: Optional[str]) -> ConversationBufferMemory:
    if messages_str is None or len(messages_str) == 0:
        return ConversationBufferMemory(memory_key="chat_history", return_messages = True)
    messages = json.loads( messages_str )
    messages = messages_from_dict( messages )
    retrieved_chat_history = ChatMessageHistory(messages=messages)
    return ConversationBufferMemory(memory_key="chat_history", 
                                    chat_memory = retrieved_chat_history, 
                                    return_messages=True)
class GertyWorker(SimpleWorker):
    """
    A simple gerty worker that initializes gerty and gets it ready for use/reuse.
    """
    def __init__(self, queues, n_ctx, db, *args, **kwargs):
        self.__gerty: Gerty = Gerty(n_ctx = n_ctx)
        self.__gerty.load_db( db )
        self.__qa = self.__gerty.get_qa_model()
        super(SimpleWorker, self).__init__(queues = queues, *args, **kwargs)
        

    def execute_job(self, job, queue):
        job.args = (*job.args, self.__qa)
        return self.perform_job(job, queue)

def query_job(messages, query, qa):
    print("Messages: ", messages)
    print("query: ", query)
    memory = deserialize_memory( messages )
    qa.memory = memory
    response = qa.run( query )
    return {
        'response': response,
        'messages': serialize_memory(qa)
    }


if __name__ == "__main__":
    #import pdb; pdb.set_trace()
    parser = argparse.ArgumentParser("Launch redis based gerty worker.")
    parser.add_argument("-db", "--database", type=valid_path, help="Cache with knowledge base")
    parser.add_argument("--context-length", type=int, default=2048, help = "Context length")
    args = parser.parse_args()

    with Connection():
        worker = GertyWorker(queues = ['default'], n_ctx = args.context_length, db = args.database )
        worker.work()