import React from "react";

export default function JobLinkInput({ value, onChange }) {
  return (
    <input
      type="url"
      placeholder="https://example.com/job-description"
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
    />
  );
}
