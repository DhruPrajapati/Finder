import { getCurrentUser, login } from "../services/authServices";
import user from "../images/user.jpg";
import From from "./common/form";
import LoginButton from "./common/loginButton";
import LoginInput from "./common/loginInputs";
import { logindata } from "./common/loginsignupdata";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { toast } from "react-toastify";

class Login extends From {
  state = {
    Login: logindata(),
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  handleOnClick = async () => {
    const { email, password } = this.state.data;
    try {
      await login(email, password);
      // debugger;
      const { state } = this.props.location;
      window.location.href = typeof state !== "undefined" ? state.from : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/" />;
    const { data, errors } = this.state;
    return (
      <div className="container-fluid login-form-div">
        <form onSubmit={this.handleSubmit} className="login-form pb-5">
          <div className="img-div">
            <img src={user} alt="" />
          </div>
          <h2 className="mt-2" style={{ color: "#8395a7" }}>
            Login
          </h2>
          {this.state.Login.map((login) => (
            <LoginInput
              key={login.id}
              icon={login.icon}
              placeholder={login.placeholder}
              type={login.type}
              id={login.userId}
              value={data[login.userId]}
              onChange={this.handleChange}
              error={errors[login.userId]}
            />
          ))}

          <LoginButton
            classes={"mt-3"}
            buttonName={"Login"}
            // handleOnClick={this.handleOnClick}
          />
          <div className="signupLink pt-3">
            <Link to="/signup" className="text-decoration-none">
              New Member? SignUp
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
