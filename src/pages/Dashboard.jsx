// src/pages/Dashboard.jsx
import React, { useState } from "react";
import ResumeUploader from "../components/ResumeUploader";
import JobLinkInput from "../components/JobLinkInput";

export default function Dashboard() {
  const [jobLink, setJobLink] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li><a href="#resume" className="block hover:text-blue-400">Upload Resume</a></li>
          <li><a href="#job" className="block hover:text-blue-400">Job Description</a></li>
          <li><a href="#tailor" className="block hover:text-blue-400">Tailored Resume</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <section id="resume" className="mb-12">
          <h3 className="text-xl font-semibold mb-2">1. Upload Your Resume</h3>
          <div className="bg-white p-4 rounded shadow">
            <ResumeUploader />
          </div>
        </section>

        <section id="job" className="mb-12">
          <h3 className="text-xl font-semibold mb-2">2. Paste Job Description Link</h3>
          <div className="bg-white p-4 rounded shadow">
            <JobLinkInput value={jobLink} onChange={(e) => setJobLink(e.target.value)} />
          </div>
        </section>

        <section id="tailor">
          <h3 className="text-xl font-semibold mb-2">3. AI-Tailored Resume Suggestions</h3>
          <div className="bg-white p-4 rounded shadow">[ComparisonResult Placeholder]</div>
        </section>
      </main>
    </div>
  );
}
