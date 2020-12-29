import React, { Component, Fragment } from "react";
// import ReactTooltip from "react-tooltip";

// props to pass
// 1) type
// 2) id
// 3) placeholder
// 4) icon

class LoginInput extends Component {
  render() {
    const {
      icon: i,
      type,
      id,
      placeholder,
      value,
      onChange,
      error,
    } = this.props;

    let icon = "fa fa-";
    icon += i;

    return (
      <Fragment>
        <div className={error ? "error-input-field " : "input-field"}>
          <i className={icon}></i>
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            autoComplete="off"
          />
        </div>
        {error && <span className=" container text-danger">{error}</span>}
      </Fragment>
    );
  }
}

export default LoginInput;
