import React, { Component } from "react";
import Header from "./header";
import Sections from "./section";
import Footer from "./footer";

class MainContain extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header user={this.props.user} />
        <Sections />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainContain;
