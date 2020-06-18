import React from 'react';
import About from './Components/about.jsx'
import Header from './Components/header.jsx'
import Education from './Components/education.jsx'
import Experience from './Components/experience.jsx'
import Skill from './Components/skill.jsx'
import Projects from './Components/projects.jsx'
import Activities from './Components/activities.jsx'
//import './App.css'
import resumeData from './resumeData';

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <About />
      <Experience />
      <Activities />
      <Skill />
      <Education />
      <Projects />

    </div>
  );
}

export default App;
