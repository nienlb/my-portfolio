import React from 'react';
import About from './Components/about.jsx'
import Header from './Components/header'
import Education from './Components/education'
import Experience from './Components/experience'
import Skill from './Components/skill'
import Projects from './Components/projects'
import Activities from './Components/activities'
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
      <Activities />

    </div>
  );
}

export default App;
