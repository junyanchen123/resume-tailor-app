// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Tailor Your Resume with AI</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Upload your resume, paste a job posting URL, and let AI tailor your resume for the perfect match.
      </p>
      <button
        onClick={() => navigate("/dashboard")}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </div>
  );
}
