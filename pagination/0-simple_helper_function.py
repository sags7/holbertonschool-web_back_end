#!/usr/bin/env python3
"""
This module contains a function named index_range
that takes two integer arguments page and page_size.
It returns a tuple of two integers representing the start and end index
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    returns a tuple the start index and end index
    corresponding to the range of indexes to return in a list
    for those particular pagination parameters.
    Args:
      page (int): The page number.
      page_size (int): The number of items per page.
    Returns:
      Tuple[int, int]: A tuple containing the start index and end index.
    """
    if page <= 0 or page_size <= 0:
        return (0, 0)
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
