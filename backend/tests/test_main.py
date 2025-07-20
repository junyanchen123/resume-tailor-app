from fastapi.testclient import TestClient
from app.main import app


def test_parse_job_url(monkeypatch):
    async def fake_fetch(url: str):
        return "Sample description"

    monkeypatch.setattr("app.main.fetch_job_description", fake_fetch)

    client = TestClient(app)
    resp = client.post("/job/parse-url", json={"url": "http://example.com"})
    assert resp.status_code == 200
    assert resp.json() == {"job_description": "Sample description"}
