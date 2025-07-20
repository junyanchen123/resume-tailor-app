import React, { useState } from "react";

export default function ResumeUploader() {
  const [fileName, setFileName] = useState("");

  function handleChange(e) {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  }

  return (
    <div className="space-y-2">
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        className="block w-full text-sm text-gray-700"
      />
      {fileName && (
        <p className="text-sm text-gray-500">Selected: {fileName}</p>
      )}
    </div>
  );
}
