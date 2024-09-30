# Use a pipeline as a high-level helper
from transformers import pipeline

pipe = pipeline("fill-mask", model="distilbert/distilbert-base-uncased")

# sample output
# [{'label': 'POSITIVE', 'score': 0.9998704195022583}]
