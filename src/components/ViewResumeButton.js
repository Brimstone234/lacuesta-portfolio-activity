import React from 'react';
import resumeFile from '../assets/resume.pdf'; // Import the PDF file

const ViewResumeButton = () => {
  const handleView = () => {
    window.open(resumeFile, '_blank'); // Open the PDF in a new tab
  };

  return (
    <button
      onClick={handleView}
      className="border border-pink-600 text-pink-600 rounded px-6 py-2 mx-2 hover:bg-pink-600 hover:text-white transition"
    >
      View Resume
    </button>
  );
};

export default ViewResumeButton;