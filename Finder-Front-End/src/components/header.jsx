import React, { Component } from "react";
import HeaderSection from "./headerSection";
import Navbar from "./navBar";

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <Navbar user={this.props.user} />
        <HeaderSection />
      </div>
    );
  }
}

export default Header;
