import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./common/loginButton";

class NotificationMsg extends Component {
  state = {
    heading:
      "Sorry We Did't Found Any Match Yet. But We Will Notify You As Soon As We Find The Match ",
  };

  render() {
    return (
      <div className=" missing-div pt-5 pb-3 ">
        <div
          className=" container missing-form-div "
          style={{ marginTop: 159, paddingTop: 100, paddingBottom: 50 }}
        >
          <h2 className="text-center text-ca text-dark ">
            {this.state.heading}
          </h2>
          <p>{this.state.p}</p>
          <div className="d-flex">
            <Link to="/">
              <LoginButton buttonName={"Okay!!"} classes={"pb-2"} LoginButton />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationMsg;
