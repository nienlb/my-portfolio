/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function projects() {
  return (
    <section id="projects">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          {/* projects-wrapper */}
          <div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <div className="columns projects-item">
              <div className="item-wrap">
                <a href="#modal-01" title="Modal 1">
                  <img alt="" src="https://seydqg.dm.files.1drv.com/y4mwN2VANmczP2wYBuT_JCuuuQTmYlAqZVjvG5YrEl8U81kGx_AVkSJDwMQVhQ0aBbF5wI2xdrBMpB6ex8gt0fPPYUIWhpq5zRY8JUj0uFnmSFhqpYTNpYEfJ3WWvqpN4GzASI3KKv-0KO8lYsINxgFb3egYwNTqFmMtoXn9Py-bhDMNfTE68zaHolonNX-FCP9kShx4vQO5XqwgJ9Z-vm3VQ?width=660&height=660&cropmode=none" />
                  <div className="overlay">
                    <div className="projects-item-meta">
                      <h5>BOXSHOP APP</h5>
                      <p>LOYALT APPLICATION</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
            <div className="columns projects-item">
              <div className="item-wrap">
                <a href="#modal-02" title="Modal 1">
                  <img alt="" src="https://seyeqg.dm.files.1drv.com/y4m6Oz2Xb5NfbPWbuN1iU6s35mkMKEpmRRqGFz7EthwynGPcgeJHoAqB4lr0zTcblC8VMPncYturieaMW6f-GXBK7drmytHeSQw_1kDVa0OnoibWTAR_czieJmODaYti4q-CeB1i6xCcAtnUj-ODuh3zw51IM5muYZys7KXhBzZ9AD1cAdPXlmljpV57npZRd3Hr_CCPszhPfHAPg0pctyOHA?width=660&height=660&cropmode=none" />
                  <div className="overlay">
                    <div className="projects-item-meta">
                      <h5>BOXSHOP SCANNER</h5>
                      <p>MOBILE APPLICATION</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
            <div className="columns projects-item">
              <div className="item-wrap">
                <a href="#modal-03" title="Modal 1">
                  <img alt="" src="images/projects/judah.jpg" />
                  <div className="overlay">
                    <div className="projects-item-meta">
                      <h5>Judah</h5>
                      <p>Webdesign</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
            <div className="columns projects-item">
              <div className="item-wrap">
                <a href="#modal-04" title="Modal 1">
                  <img alt="" src="images/projects/into-the-light.jpg" />
                  <div className="overlay">
                    <div className="projects-item-meta">
                      <h5>Into The Light</h5>
                      <p>Photography</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
            <div className="columns projects-item">
              <div className="item-wrap">
                <a href="#modal-05" title="Modal 1">
                  <img alt="" src="images/projects/farmerboy.jpg" />
                  <div className="overlay">
                    <div className="projects-item-meta">
                      <h5>Farmer Boy</h5>
                      <p>Branding</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
            <div className="columns projects-item">
              <div className="item-wrap">
                <a href="#modal-06" title="Modal 1">
                  <img alt="" src="images/projects/girl.jpg" />
                  <div className="overlay">
                    <div className="projects-item-meta">
                      <h5>Girl</h5>
                      <p>Photography</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
            <div className="columns projects-item">
              <div className="item-wrap">
                <a href="#modal-07" title="Modal 1">
                  <img alt="" src="images/projects/origami.jpg" />
                  <div className="overlay">
                    <div className="projects-item-meta">
                      <h5>Origami</h5>
                      <p>Illustrration</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
            <div className="columns projects-item">
              <div className="item-wrap">
                <a href="#modal-08" title="Modal 1">
                  <img alt="" src="images/projects/retrocam.jpg" />
                  <div className="overlay">
                    <div className="projects-item-meta">
                      <h5>Retrocam</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div>  {/* item end */}
          </div> {/* projects-wrapper end */}
        </div> {/* twelve columns end */}
        {/* Modal Popup
	      --------------------------------------------------------------- */}
        <div id="modal-01" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/projects/modals/m-coffee.jpg" alt="" />
          <div className="description-box">
            <h4>Coffee Cup</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        <div id="modal-02" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/projects/modals/m-console.jpg" alt="" />
          <div className="description-box">
            <h4>Console</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-02 End */}
        <div id="modal-03" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/projects/modals/m-judah.jpg" alt="" />
          <div className="description-box">
            <h4>Judah</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            <span className="categories"><i className="fa fa-tag" />Branding</span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-03 End */}
        <div id="modal-04" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/projects/modals/m-intothelight.jpg" alt="" />
          <div className="description-box">
            <h4>Into the Light</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            <span className="categories"><i className="fa fa-tag" />Photography</span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-04 End */}
        <div id="modal-05" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/projects/modals/m-farmerboy.jpg" alt="" />
          <div className="description-box">
            <h4>Farmer Boy</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-05 End */}
        <div id="modal-06" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/projects/modals/m-girl.jpg" alt="" />
          <div className="description-box">
            <h4>Girl</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            <span className="categories"><i className="fa fa-tag" />Photography</span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-06 End */}
        <div id="modal-07" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/projects/modals/m-origami.jpg" alt="" />
          <div className="description-box">
            <h4>Origami</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-07 End */}
        <div id="modal-08" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/projects/modals/m-retrocam.jpg" alt="" />
          <div className="description-box">
            <h4>Retrocam</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-01 End */}
      </div> {/* row End */}
    </section>
  )
}
  export default projects;