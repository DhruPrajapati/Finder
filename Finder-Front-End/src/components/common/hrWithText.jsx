import React, { Component } from "react";

class HrWithText extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid pt-3 pb-3">
        <div className="hr">
          <span className="hr-title pl-2 pr-2">{this.props.name} </span>
        </div>
      </div>
    );
  }
}

export default HrWithText;
