import userpic from "../images/user.jpg";
import { register } from "../services/userService";
import { getCurrentUser, loginWithJwt } from "../services/authServices";
import { signupdata } from "./common/loginsignupdata";
import LoginInput from "./common/loginInputs";
import LoginButton from "./common/loginButton";
import From from "./common/form";
import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

class SignUp extends From {
  state = {
    SignUp: signupdata(),
    data: { username: "", email: "", password: "" },
    errors: { email: "" },
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username")
      .min(3)
      .error(() => {
        return {
          message: '"Username" length must be 3 char long',
        };
      }),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  handleOnClick = async () => {
    try {
      const response = await register(this.state.data); //first register the user
      loginWithJwt(response.headers["x-auth-token"]); // storing token in localStorage
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/" />; // if user exsist then redirect to home page
    const { data, errors } = this.state;
    return (
      <div className="container-fluid login-form-div">
        <form
          onSubmit={this.handleSubmit}
          action=""
          className="login-form pb-5"
        >
          <div className="img-div">
            <img src={userpic} alt="" />
          </div>
          <h2 className="mt-2" style={{ color: "#8395a7" }}>
            SignUp
          </h2>
          {this.state.SignUp.map((signup) => (
            <LoginInput
              key={signup.id}
              icon={signup.icon}
              placeholder={signup.placeholder}
              type={signup.type}
              id={signup.userId}
              value={data[signup.userId]}
              onChange={this.handleChange}
              error={errors[signup.userId]}
            />
          ))}
          <LoginButton
            classes={"mt-3"}
            buttonName={"SignUp"}
            // handleOnClick={this.handleOnClick}
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
