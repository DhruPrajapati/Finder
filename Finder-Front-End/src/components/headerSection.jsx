import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
class HeaderSection extends Component {
  render() {
    return (
      <section className="header-section">
        <div className="center-div">
          <h1 className="font-weight-bold">We are the web developers</h1>
          <p>We create the worlds best Website</p>
          <div className="header-buttons">
            <AnchorLink href="#aboutid">about</AnchorLink>
            <AnchorLink href="#contactid">Contact Us</AnchorLink>
          </div>
        </div>
      </section>
    );
  }
}

export default HeaderSection;
