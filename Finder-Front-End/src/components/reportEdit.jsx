import React, { Component } from "react";
import LoginButton from "./common/loginButton";
import { Link } from "react-router-dom";

class ReportEdit extends Component {
  state = {
    route: null,
    Response: null,
    heading:
      "All the Initial Information Of The Person  is Taken, If any Update Come's We Will Notify You",
    p: "if you want to update any information of The Person than Click on Edit",
  };

  constructor(props) {
    super(props);
    const { state } = this.props.location;
    if (typeof state !== "undefined") this.state.route = state.takeRoute;
  }

  render() {
    return (
      <React.Fragment>
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
              <Link
                to={{
                  pathname: `${this.state.route}`,
                  state: {
                    request: "Put",
                  },
                }}
              >
                <LoginButton buttonName={"Edit"} classes={"pb-2"} />
              </Link>
              <Link to="/">
                <LoginButton buttonName={"Done!!"} classes={"pb-2"} />
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReportEdit;
