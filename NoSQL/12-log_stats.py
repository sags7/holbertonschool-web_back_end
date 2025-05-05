#!/usr/bin/env python3
"""
Python script that provides some stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


def count_documents(query: str):
    """Counts documents in a MongoDB collection"""
    client = MongoClient("mongodb://localhost:27017/")
    collection = client.logs.nginx
    return collection.count_documents(query)


def main():
    """Main function"""
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print(f"{count_documents({})} logs")
    print("Methods:")
    for method in methods:
        print(f"\method {method}: {count_documents({'method': method})}")
    print(f"{count_documents({'method': 'GET', 'path': '/status'})} status check")


if __name__ == "__main__":
    main()
