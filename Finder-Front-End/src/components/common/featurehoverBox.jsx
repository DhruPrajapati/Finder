import React, { Component } from "react";
import { Link } from "react-router-dom";

//props that need to pass
//1.icon className
//2.heading
// 3.discription
// 4. link

class HoverBox extends Component {
  render() {
    let icon = "fa-3x fa fa-";
    icon += this.props.icon;
    const { link, route, heading, discription } = this.props;
    return (
      <div className="extra-div col-lg-6 col-md-6 col-12">
        <Link to={{ pathname: link, state: { takeRoute: route } }}>
          <i className={icon} aria-hidden="true"></i>
        </Link>
        <h2 className="text-uppercase">{heading}</h2>
        <p>{discription}</p>
      </div>
    );
  }
}

export default HoverBox;
