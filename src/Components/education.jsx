import React from 'react';

function Education() {
  return (

    <section id="education">
      {/* Education
      ----------------------------------------------- */}
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>University of Economics and Laws</h3>
              <p className="info">Management Information Systems <span>•</span> <em className="date">April 2013</em></p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Nordic Coder</h3>
              <p className="info">Course : React Native <span>•</span> <em className="date">2018</em></p>
              <p className="info">Course : ReactJS + JS<span>•</span> <em className="date">2019</em></p>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <h3>Facebook Developer Circle - DEVC</h3>
              <p className="info">Class : React Native <span>•</span> <em className="date">2019</em></p>
            </div>
          </div>
        </div> {/* main-col end */}
      </div>
    </section>
  );
}

export default Education;