from gc import collect
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
from pathlib import Path
import pandas as pd
from motor.motor_asyncio import AsyncIOMotorClient
import bson
from bson import json_util
import json
app = FastAPI()

# Connect back and front end as they operate on different ports
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/uploadFile")
async def uploadFile(file: UploadFile):  
    print(file.filename)
    df = pd.read_excel(file.file)  # Read the Excel file into a DataFrame
    client = AsyncIOMotorClient("mongodb://mongodb:27017")
    db = client.Linux
    collection = db[file.filename.replace('.xlsx', '')]  
    await collection.insert_many(df.to_dict("records"))  
    return {"message": "Data uploaded successfully"}

@app.get("/getDatabases")
async def getDatabases():
    client = AsyncIOMotorClient("mongodb://mongodb:27017")
    db = client.Linux
    collection_names = await db.list_collection_names()
    return collection_names

@app.get("/getCollection/{collection_name}")
async def getCollection(collection_name: str):
    client = AsyncIOMotorClient("mongodb://mongodb:27017")
    db = client.Linux
    collection = db[collection_name]
    documents = await collection.find().to_list(length=100)
    return json.loads(json_util.dumps(documents))
