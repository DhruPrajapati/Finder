import React, { Component } from "react";

// the props are
// handleOnClick = function
// buttonName
// classes for the div

class LoginButton extends Component {
  render() {
    let classes =
      "login-button d-flex justify-content-center  align-content-center ";
    classes += this.props.classes;
    const handleOnClick = this.props.handleOnClick;
    const buttonName = this.props.buttonName;
    return (
      <div className={classes}>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleOnClick}
          id="button"
        >
          {buttonName}
        </button>
      </div>
    );
  }
}

export default LoginButton;
