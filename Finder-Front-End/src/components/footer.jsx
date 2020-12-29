import MailBox from "./mailBox";
import Contact from "./contact";
import React, { Component } from "react";
import About from "./about";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Contact />
        <MailBox />
        <About />
      </React.Fragment>
    );
  }
}

export default Footer;
