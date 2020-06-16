import React from 'react';

function Experience() {
  return (
    <section id="experience">
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Experience</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>TheBox Company</h3>
              <p className="info">SALE</p>
              <p>
                - Customer support <br />
                - Arrange shelves neatly and beautifully attract customer’s attention
              </p>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <p className="info">SUPPORTER</p>
              <p>
                - In operation team , support operating, construction activities. <br />
              -  In studio team, take photos, edit product images for the studio team.<br />
              -  In shipping team, support on order for shipping.
              </p>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <p className="info">TECHNICAL MAINTENANCE </p>
              <p>
                - Leader of maintenance team for all store. Maintenance of equipment, electricity and water issues ...
              </p>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <p className="info">INTERN DEVELOPER  </p>
              <p>
                + BOXSHOP SCANNER APP @ DEV , SUPPORTER <br />
              . Create basic application for sale staff can search code of products. <br />
              . Deloyed in Google PLay store. <br />
              + BOXSHOP APP - LOYALTY APPLICATION @ DEV, SUPPORTER <br />
              .  Create application app for customer can see information, record point ,
              searching products in store.<br />
              .  Deloyed in Apple store and Goolge PLay store.<br />
              + BOXSHOP MERCHANT APP @ BA <br />
              . Collect information for application support merchant in boxshop can
              manage and monitor the business situation at the store. <br />
              . Create mockup UI for app in Adobe XD  .<br />
              </p>
            </div>
          </div>
        </div> {/* main-col end */}
      </div>
    </section>  
  )
}
export default Experience;