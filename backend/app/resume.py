"""Placeholder module for resume parsing utilities."""

from typing import List


def extract_keywords(text: str) -> List[str]:
    """Dummy implementation returning unique words from the resume text."""
    words = {w.strip('.,') for w in text.split() if w.isalpha()}
    return sorted(words)
