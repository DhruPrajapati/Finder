import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark mr-auto" id={"home"}>
        <div className="container text-uppercase p-2 ">
          <AnchorLink
            className="navbar-brand "
            href="#"
            style={{ Color: "white", fontWeight: "bold" }}
          >
            Finder
          </AnchorLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <AnchorLink className="nav-link" href="#home">
                  Home <span className="sr-only">(current)</span>
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#featureid">
                  Features
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#testimonialid">
                  testimonial
                </AnchorLink>
              </li>
              {!this.props.user && (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Register
                    </Link>
                  </li>
                </React.Fragment>
              )}
              {this.props.user && (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      {this.props.user.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      LogOut
                    </Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
