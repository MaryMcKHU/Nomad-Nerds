from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from businesses import yelp_router
import os

app = FastAPI()

app.include_router(yelp_router)


@app.get("/")
def read_root():
    return {"Testing": "123"}


origins = [
    "http://localhost:3000",
    "http://localhost",
    os.environ.get("CORS_HOST", None),
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
