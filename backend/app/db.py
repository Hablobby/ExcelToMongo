from motor.motor_asyncio import AsyncIOMotorClient

async def get_database():
    client = AsyncIOMotorClient("mongodb://mongodb:27017")
    db = client.example_db  # replace with your db name
    return db