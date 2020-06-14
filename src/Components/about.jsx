import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profile-pic.jpg" alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>I try to be a hardworking and ambitious individual with a great passion for the bussines analyst.  I am finding a full-time position in the industry in which I can put into practice my knowledge and experience, ultimately benefiting the operations of the organisation that I work for.
                </p>
          <div className="row">
            <div className="columns download">
              <p>
                <a href="https://1drv.ms/u/s!AnBooq3pd12O20x8Lx3xIIdkiKtp?e=yG1dgw" className="button"><i className="fa fa-download" />Download My CV</a>
              </p>
            </div>
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Nien Luong</span><br />
                <span>161D/14 Lac Long Quan, 11 Dictrict<br />
                         HCM City
                      </span><br />
                <span>(+84) 366 474 688</span><br />
                <span>tatsuyanin@gmail.com</span>
              </p>
            </div>
          </div> {/* end row */}
        </div> {/* end .main-col */}
      </div>
    </section>
  );
}

export default About;
