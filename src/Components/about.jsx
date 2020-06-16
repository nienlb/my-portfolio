import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="https://seyoqg.dm.files.1drv.com/y4m5co5jFuPmVcpQQ406XOfWyCcRf6TM_ROFrBnjaY7XgDUL0i6LKBRO8ZBGRJgWTMefTNLgDa72Eqdb7I_pUQSuJmfAnW8HOlj1A7z-t6PMATQ_Ey26nzEgTntfs1aSVUf6RMpdkrOWCw0kGWz38mzSyFHSS6IS35NU-128D0Hh-fVVc8LvdjgyhYbIyA-dTqVcWrnenbjmEa-4eE0uPnuDw?width=256&height=256&cropmode=none" alt="" />
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
