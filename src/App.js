import React, { useState } from 'react';

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jdLink, setJdLink] = useState('');

  const handleResumeChange = (event) => {
    setResumeFile(event.target.files[0] || null);
  };

  const handleJdLinkChange = (event) => {
    setJdLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would handle the uploaded file
    // and JD link here. For now we just log them.
    console.log('Resume:', resumeFile);
    console.log('JD Link:', jdLink);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <h1 className="text-3xl font-semibold mb-8">Resume Tailor</h1>
      <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="resume" className="block mb-1 font-medium">Upload Resume</label>
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="jdlink" className="block mb-1 font-medium">Paste JD Link</label>
          <input
            id="jdlink"
            type="url"
            value={jdLink}
            onChange={handleJdLinkChange}
            placeholder="https://example.com/job-description"
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
