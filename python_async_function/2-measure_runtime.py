#!/usr/bin/env python3
"""
A measure_time function with integers n and max_delay as arguments
that measures the total execution time for wait_n(n, max_delay),
and returns total_time / n. Your function should return a float.
"""
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total execution time for wait_n(n, max_delay),
    and returns total_time / n.

    Args:
        n (int): the number of times to spawn wait_random
        max_delay (int): the max delay for wait_random

    Returns:
        float: the average time taken for each wait_random call
    """
    start_time = asyncio.get_event_loop().time()
    asyncio.run(wait_n(n, max_delay))
    end_time = asyncio.get_event_loop().time()
    return (end_time - start_time) / n
