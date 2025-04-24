#!/usr/bin/env python3
"""
This module contains a function sum_list which
takes a list input_list of floats as argument
and returns their sum as a float.
"""


def sum_list(input_list: list[float]) -> float:
    """
    Sums a list of floats.

    Args:
        input_list (list[float]): The list of floats to sum.

    Returns:
        float: The sum of the floats in the list.
    """
    return sum(input_list)
