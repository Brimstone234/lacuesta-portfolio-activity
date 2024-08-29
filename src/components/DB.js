import React from 'react';
import ResumeFile from '../assets/Resume.pdf';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ResumeFile;  // Path to your resume file
    link.download = 'resume.pdf';  // Optional: Filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-pink-600 rounded px-6 py-2 mx-2 hover:bg-pink-700 transition"
    >
      Download CV
    </button>
  );
};

export default DownloadButton;