// src/components/Projects.js
import React from 'react';
import appImage from '../assets/app.png';

const projects = [
  {
    id: 1,
    name: 'AutoParts App',
    imageUrl: appImage,
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.capstoneproject.autoparts&hl=en',
    fileLink: 'https://drive.google.com/file/d/11Qq8mb-aYXhg5nDqCeh5qk9kosYKvMNU/view?usp=sharing',
  },
  // Add more projects here as needed
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-xs">
            <img 
              src={project.imageUrl} 
              alt={project.name} 
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <div className="flex flex-col items-center">
              <a 
                href={project.playStoreLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline mb-2"
              >
                View on Play Store
              </a>
              <a 
                href={project.fileLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                View Project Document
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
