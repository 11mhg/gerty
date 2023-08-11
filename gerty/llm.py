import os, sys
from typing import Optional
from langchain.llms import LlamaCpp
from langchain import LLMChain
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

#    callback_manager = CallbackManager([StreamingStdOutCallbackHandler()])

MODEL_PATH = os.path.realpath(
    os.path.join(
        os.path.dirname(__file__),
        "models",
        "nous-hermes-llama-2-7b",
        "ggml-model-q4_k.bin",  # "llama-7b-chat", "ggml-model-q4_0.bin"
    )
)


def get_model(n_ctx=2048, callback_manager: Optional[CallbackManager] = None):
    assert os.path.exists(MODEL_PATH), f"Model doesn't exist at path {MODEL_PATH}"

    n_gpu_layers = 25  # 40
    n_batch = 512

    llm = LlamaCpp(
        model_path=MODEL_PATH,
        n_gpu_layers=n_gpu_layers,
        n_batch=n_batch,
        callback_manager=callback_manager,
        stop=["###", "\n\n", "EXAMPLE"],  # ["Human:", "\n\n"],
        n_ctx=n_ctx,
        f16_kv=True,
        verbose=False,
    )

    return llm


def get_chain():
    llm = get_model()
    prompt = get_prompt()

    return LLMChain(prompt=prompt, llm=llm)


if __name__ == "__main__":
    from embedding import get_embeddings
    from tqdm import tqdm
    from time import time

    embedding_model = get_embeddings()

    start = time()
    for _ in tqdm(range(10)):
        out = embedding_model.embed_query("hello world")
    end = time()

    print(f"{(end-start)/10} s/iter")

    # chain = get_chain()
    #
    # print(chain("Hello world"))
