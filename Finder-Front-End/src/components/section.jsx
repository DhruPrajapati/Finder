import React, { Component } from "react";
import Features from "./features";
import Testimonial from "./testimonial";

class Sections extends Component {
  render() {
    return (
      <React.Fragment>
        <Features />
        <Testimonial />
      </React.Fragment>
    );
  }
}

export default Sections;
