import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class About extends Component {
  render() {
    return (
      <footer className="footersection" id="footerfdiv">
        <div className="container" id={"aboutid"}>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 footer-div">
              <div>
                <h3>About DhruTechnical</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, cupiditate! Quod, repudiandae eaque odio corrupti
                  quisquam ea, libero ratione quaerat nostrum, omnis ullam
                  labore ipsum natus ab illo nihil velit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 footer-div text-center">
              <div className="footer-div-2">
                <h3>Navigation Link</h3>
                <li>
                  <AnchorLink href="#home">Home</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#featureid">Features</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#testimonialid">testimonial</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#contactid">Contact</AnchorLink>
                </li>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 footer-div">
              <div>
                <h3>NewsLetter</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, cupiditate! Quod, repudiandae eaque odio corrupti
                  quisquam ea, libero ratione quaerat nostrum, omnis ullam
                  labore ipsum natus ab illo nihil velit.
                </p>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-12 ">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control news-letter"
                          placeholder="Your Email"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">FeedBack </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <p>
              Copyright @2019 All right reserved | this template is made by DHRU
              PRAJAPATI
            </p>
          </div>
          {/* <div className="scrolltop float-right">
            <i className="fa fa-arrow-up" onclick="topfunction()" id="mybtn"></i>
        </div> */}
        </div>
      </footer>
    );
  }
}

export default About;
