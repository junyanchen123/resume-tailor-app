from fastapi import FastAPI
from pydantic import BaseModel

from .job import fetch_job_description

app = FastAPI()

class JobURL(BaseModel):
    url: str

@app.post("/job/parse-url")
async def parse_job_url(job: JobURL):
    """Fetch and return the job description text from a URL."""
    description = await fetch_job_description(job.url)
    return {"job_description": description}
