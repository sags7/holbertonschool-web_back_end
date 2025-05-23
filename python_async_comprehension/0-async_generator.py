#!/usr/bin/env python3
"""
This module creates an asynchronous generator that yields numbers
from 0 to 10 with a delay of 1 second between each yield.
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    An asynchronous generator that yields numbers from 0 to 10 with a delay.
    Yields:
        int: A random number between 0 and 10.
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
