#!/usr/bin/env python3
"""
This module contains a function task_wait_random that takes
an integer max_delay and returns a asyncio.Task.
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Returns a asyncio.Task that waits for a random delay
    between 0 and max_delay seconds.

    Args:
        max_delay (int): The maximum delay in seconds.

    Returns:
        asyncio.Task: The task that will wait for the random delay.
    """
    return asyncio.create_task(wait_random(max_delay))
