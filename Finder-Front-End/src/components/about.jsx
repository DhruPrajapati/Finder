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
                <h3>About Creater</h3>
                <p className="">
                  Hi, I am Dhru Prajapati, the creater of this website. Every
                  year, countless individuals go missing, leaving families
                  heartbroken and desperate for answers. My vision was to create
                  an app dedicated to social service, leveraging advanced
                  technology to help people reunite with their loved ones.
                  Through this app, I aim to bring hope and support to those
                  affected by such tragedies, making it easier to find and
                  reconnect with missing family members.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 footer-div text-center">
              <div className="footer-div-2">
                <h3>Navigation Link</h3>
                <li className="pt-2">
                  <AnchorLink href="#home">Home</AnchorLink>
                </li>
                <li className="pt-2">
                  <AnchorLink href="#featureid">Features</AnchorLink>
                </li>
                <li className="pt-2">
                  <AnchorLink href="#testimonialid">testimonial</AnchorLink>
                </li>
                <li className="pt-2">
                  <AnchorLink href="#contactid">Contact</AnchorLink>
                </li>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 footer-div">
              <div>
                <h3>NewsLetter</h3>
                <p>
                  By subscribing to our newsletter, you will receive
                  notifications about all our successful matches, spreading hope
                  to families of missing individuals. You will also stay
                  informed about our latest updates. Please note that the
                  newsletter feature is currently under development.
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
