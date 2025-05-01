#!/usr/bin/env python3
"""Deletion-resilient hypermedia pagination
"""
import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as file:
                reader = csv.reader(file)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
            """The goal is not to miss items from a dataset
            when changing page,
            if certain rows are removed from the
            dataset between queries.
            return dictionary with the following keys:
            - index: the current return index of the page.
            - next_index: the next index to query from the dataset
            - page_size: the current page size
            - data: the current page of the dataset
            """
            if index is None:
                index = 0

            assert isinstance(index, int) and index >= 0 and index < len(self.indexed_dataset())
            assert isinstance(page_size, int) and page_size > 0 and page_size <= len(self.indexed_dataset())

            dataset = self.indexed_dataset()
            current_index = index
            data = []

            while len(data) < page_size and current_index < len(dataset):
              item = dataset.get(current_index)
              if item:
                data.append(item)
                current_index += 1

            return {
                "index": index,
                "next_index": current_index,
                "page_size": len(data),
                "data": data,
            }
