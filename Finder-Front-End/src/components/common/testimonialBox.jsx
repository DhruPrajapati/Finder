import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class TestimonialBox extends Component {
  state = {};
  render() {
    return (
      <div className="col col-lg-4 col-md-4 col-12">
        <div className="box extra-div">
          <AnchorLink href="#home">
            <img
              src={this.props.img}
              alt=""
              className="img-fluid img-thumbnail"
            />
          </AnchorLink>

          <p className="m-4">{this.props.discription}</p>
          <h1>{this.props.name}</h1>
          <h2>{this.props.heading}</h2>
        </div>
      </div>
    );
  }
}

export default TestimonialBox;
