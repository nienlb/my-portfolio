import React from 'react';
import About from './Components/about.jsx'
import Header from './Components/header'
import Education from './Components/education'
import Experience from './Components/experience'
import Skill from './Components/skill'
import Projects from './Components/projects'
import Call from './Components/call'
import Testimonials from './Components/testimonials'
import Contact from './Components/contact'
import './App.css'
import resumeData from './resumeData';

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <About />
      <Education />
      <Experience />
      <Skill />
      <Projects />
      <Call />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
