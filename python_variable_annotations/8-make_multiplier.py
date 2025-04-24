#!/usr/bin/env python3
"""
This module contains a function make_multiplier that takes
a float multiplier as argument and returns a function
that multiplies a float by multiplier.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    returns a function that multiplies a float by multiplier.
    Args:
        multiplier (float): The multiplier to use.
    Returns:
        Callable[[float], float]: A function that takes a float and returns
        the product of the float and multiplier.
    """


    def multiplier_function(value: float) -> float:
        """
        Multiplies a float by multiplier.
        Args:
            value (float): The value to multiply.
        Returns:
            float: The product of the value and multiplier.
        """
        return value * multiplier
    return multiplier_function
