from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # NEW


app = FastAPI()

# Connect back and front end as they operate on different ports
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return "Hello, World!"