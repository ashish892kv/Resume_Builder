import React from 'react';
import './ResumePreview.css';

function ResumePreview({ formData }) {
  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Education:</strong> {formData.education}</p>
      <p><strong>Experience:</strong> {formData.experience}</p>
      <p><strong>Skills:</strong> {formData.skills}</p>
    </div>
  );
}

export default ResumePreview;
