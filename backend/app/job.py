"""Utilities for fetching job descriptions from URLs."""

from typing import Optional

from bs4 import BeautifulSoup

try:
    from playwright.sync_api import sync_playwright
except Exception:  # pragma: no cover - playwright may be missing during tests
    sync_playwright = None

import requests


def _parse_html(html: str) -> str:
    """Extract visible text from HTML."""
    soup = BeautifulSoup(html, "html.parser")
    text = soup.get_text(separator="\n")
    return text.strip()


def fetch_job_description(url: str) -> str:
    """Fetch a job description from a URL.

    Uses Playwright if available, otherwise falls back to requests.
    """
    html: Optional[str] = None

    if sync_playwright:
        try:
            with sync_playwright() as p:
                browser = p.chromium.launch()
                page = browser.new_page()
                page.goto(url)
                html = page.content()
                browser.close()
        except Exception:
            html = None

    if html is None:
        resp = requests.get(url, timeout=10)
        resp.raise_for_status()
        html = resp.text

    return _parse_html(html)
