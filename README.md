# TailorGOAT ✂️🧠

An AI-powered resume tailoring tool that customizes your resume to each job posting by scraping job descriptions and intelligently matching key skills, phrases, and requirements. Built with React + Tailwind (frontend) and FastAPI + Playwright (backend).

---

## 📦 Tech Stack

### Frontend

* React (with React Router)
* Tailwind CSS

### Backend

* FastAPI
* Playwright (for dynamic JS scraping)
* BeautifulSoup (for HTML parsing)
* OpenAI (optional, for AI suggestions)

---

## 🚀 Features

* Upload your base resume
* Paste a job description URL
* Automatically scrape the job description
* Highlight missing keywords/skills
* (Optional) AI-generated tailored bullet points

---

## 🛠 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/resume-tailor-app.git
cd resume-tailor-app
```

### 2. Frontend Setup (React + Tailwind)

```bash
cd frontend
npm install
npm start
```

### 3. Backend Setup (FastAPI + Playwright)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
playwright install
uvicorn app.main:app --reload
```

Then open: `http://localhost:8000/docs` for the backend Swagger UI.

### 4. Connect Frontend ↔ Backend

Make sure your frontend code calls:

```http
POST http://localhost:8000/job/parse-url
```

---

## 📁 Folder Structure

```
resume-tailor-app/
├── frontend/             # React + Tailwind
│   ├── src/
│   │   ├── pages/        # Home and Dashboard
│   │   ├── components/   # ResumeUploader, JobLinkInput, etc.
│   └── index.css         # Tailwind setup
│
├── backend/              # FastAPI backend
│   ├── app/
│   │   ├── main.py
│   │   ├── job.py        # Scraping logic
│   │   ├── resume.py     # Resume parsing (coming soon)
│   │   └── tailor.py     # AI logic (coming soon)
│   └── requirements.txt
└── README.md
```

---

## 🧪 Sample API Usage

**POST** `/job/parse-url`

```json
{
  "url": "https://boards.greenhouse.io/airbnb/jobs/123456"
}
```

**Response**

```json
{
  "job_description": "You will design, build, and maintain..."
}
```

---

## 🌐 Deployment Notes

* Use Vercel or Netlify for the frontend
* Use Render or Railway for the backend
* If scraping fails, ensure you’re using Playwright with JS rendering and not hitting a blocked site (e.g., LinkedIn/Indeed)

---

## 📌 TODO

* Resume keyword matcher
* AI-based bullet point generator (via OpenAI)
* Save multiple resume versions
* Job application tracker

---

## 📄 License

MIT License

---

## 👤 Author

Created by [@junyanchen123](https://github.com/junyanchen123) — tailored for real-world job search automation.

---

*"Because your resume deserves to be as tailored as your suit."* 💼
