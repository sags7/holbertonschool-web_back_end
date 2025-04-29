#!/usr/bin/env python3
"""
Contains a measure_runtime coroutine that will execute
async_comprehension four times in parallel using asyncio.gather.

measure_runtime should measure the total runtime and return it.
"""
import asyncio
import time
from typing import List
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Measure the total runtime of four async_comprehension calls.

    Returns:
        float: The total runtime of the four async_comprehension calls.
    """
    start_time = time.time()
    await asyncio.gather(async_comprehension(), async_comprehension(),
                         async_comprehension(), async_comprehension())
    return time.time() - start_time
