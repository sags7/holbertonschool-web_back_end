#!/usr/bin/env python3
""" This module contains a function task_wait_n.
The code is nearly identical to wait_n from task 1
except task_wait_random is being called.
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Returns a asyncio.Task that waits for a random delay
    between 0 and max_delay seconds.
    Args:
        n (int): the times to spawn wait_random
        max_delay (int): the max delay for wait_random
    Returns:
        List[float]: a list of all the delays
    """
    delays = []
    tasks = [task_wait_random(max_delay) for task in range(n)]
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
