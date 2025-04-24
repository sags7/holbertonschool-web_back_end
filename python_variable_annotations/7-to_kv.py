#!/usr/bin/env python3
"""
This module contains a function to_kv that takes a string k
and an int OR float v as arguments and returns a tuple.
The first element of the tuple is the string k.
The second element is the square of the int/float v
and should be annotated as a float.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple consisting of k and v

    Args:
        k (str): The string to be returned as the first element of the tuple.
        v (int | float): The int or float to be
        squared and returned as the second element of the tuple.
    Returns:
        tuple: A tuple containing k and the square of v.
    """
    return (k, v ** 2)
