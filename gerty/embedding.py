import os, sys
from .llm import MODEL_PATH
from langchain.storage import LocalFileStore
from langchain.embeddings import (
    LlamaCppEmbeddings,
    CacheBackedEmbeddings,
    HuggingFaceEmbeddings,
    SentenceTransformerEmbeddings,
)


def get_embeddings(n_ctx=2048, n_gpu_layers=25, n_batch=512, verbose=True):
    model = LlamaCppEmbeddings(
        model_path=MODEL_PATH,
        n_ctx=n_ctx,
        n_gpu_layers=n_gpu_layers,
        n_batch=n_batch,
        f16_kv=True,
    )
    model.client.verbose = verbose

    local_file_store: LocalFileStore = LocalFileStore("./.cache/")
    cache_embedder = CacheBackedEmbeddings.from_bytes_store(
        model, local_file_store, namespace="llama-cpp-embeddings"
    )

    return cache_embedder
