#!/usr/bin/env python3
"""
Python script that provides some stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


def count_documents(collection, query: dict):
    """Counts documents in a MongoDB collection"""
    return collection.count_documents(query)


def main():
    """Main function"""

    client = MongoClient("mongodb://localhost:27017/")
    collection = client.logs.nginx
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print(f"{count_documents(collection, {})} logs")
    print("Methods:")
    for method in methods:
        print(f"\tmethod {method}: {count_documents(collection, {'method': method})}")
    print(
        f"{count_documents(collection,{'method': 'GET', 'path': '/status'})} status check"
    )


if __name__ == "__main__":
    main()
