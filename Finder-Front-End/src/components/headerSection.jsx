import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
class HeaderSection extends Component {
  render() {
    return (
      <section className="header-section">
        <div className="center-div">
          <h1 className="font-weight-bold header-shadow">
            Public Assistance in Search Efforts
          </h1>
          <p className=" header-shadow">
            We are here to help you reunite with your loved ones in the shortest
            time possible.
          </p>
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
