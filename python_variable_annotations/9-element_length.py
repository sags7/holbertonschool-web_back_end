#!/usr/bin/env python3
"""
This module Annotates the below function’s parameters and return values with the appropriate types

def element_length(lst):
    return [(i, len(i)) for i in lst]
"""
from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """
    Annotates the below function’s parameters and return values with the appropriate types

    def element_length(lst):
        return [(i, len(i)) for i in lst]
    """
    return [(i, len(i)) for i in lst]
