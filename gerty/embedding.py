import os, sys
from .llm import MODEL_PATH
from langchain.embeddings import LlamaCppEmbeddings

def get_embeddings(n_ctx = 2048, n_gpu_layers=25, n_batch=512):
    return LlamaCppEmbeddings(
        model_path = MODEL_PATH,
        n_ctx = n_ctx,
        n_gpu_layers=n_gpu_layers,
        n_batch = n_batch,
        f16_kv = True,
    )
    
