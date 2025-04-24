#!/usr/bin/env python3
"""
This module contains a function sum_mixed_list which
takes a list mxd_lst of integers and floats and
returns their sum as a float.
"""
from typing import List


def sum_mixed_list(mxd_lst: List[int | float]) -> float:
    """
    Sums a list of integers and floats.

    Args:
        mxd_lst (list[int | float]): The list of integers and floats to sum.

    Returns:
        float: The sum of the integers and floats in the list.
    """
    return sum(mxd_lst)
