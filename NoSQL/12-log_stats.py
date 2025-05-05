#!/usr/bin/env python3
"""
Python script that provides some stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


def log_stats(query: str):
    """Provides some stats about Nginx logs stored in MongoDB"""
    client = MongoClient("mongodb://localhost:27017/")
    collection = client.logs.nginx
    return collection.count_documents(query)


def main():
    """Main function"""
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print(f"{log_stats({})} logs")
    print("Methods:")
    for method in methods:
        print(f"\method {method}: {log_stats({'method': method})}")


if __name__ == "__main__":
    main()
