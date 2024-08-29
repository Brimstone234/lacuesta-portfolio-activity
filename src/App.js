// src/App.js
import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
