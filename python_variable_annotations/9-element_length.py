#!/usr/bin/env python3
"""
This module Annotates the below function’s parameters
and return values with the appropriate types

def element_length(lst):
    return [(i, len(i)) for i in lst]
"""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:

    """
    Returns a list of tuples containing the elements of lst and their lengths.

    Args:
        lst (Iterable[Sequence[Union[str, bytes]]]):
            The iterable containing elements to be processed.

    Returns:
        List[Tuple[Union[str, bytes], int]]:
            A list of tuples where each tuple contains an element from lst
        and its length.
    """
    return [(i, len(i)) for i in lst]
