#!/usr/bin/env python3
"""
Python function that lists all documents in a Mongo collection
"""


def list_all(mongo_collection):
    """
    Lists all documents in a collection
    Args:
        mongo_collection: pymongo collection object
    Returns:
        List of documents in the collection
    """
    return list(mongo_collection.find())