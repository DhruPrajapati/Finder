import React, { Component, Fragment } from "react";

class ReportFormInput extends Component {
  render() {
    const {
      classes: classN,
      formid,
      label,
      type,
      error,
      value,
      onChange,
    } = this.props;

    let classes = "form-group ";
    classes += classN;

    return (
      <Fragment>
        <div className={error ? classes : classes}>
          <label htmlFor={formid}>{label}</label>
          <input
            type={type}
            className="form-control"
            style={error ? { boxShadow: "0px 0px 5px red" } : {}}
            id={formid}
            name={formid}
            value={value}
            onChange={onChange}
            autoComplete="off"
          />
          {error && <p className=" text-danger font-size">{error}</p>}
        </div>
      </Fragment>
    );
  }
}

export default ReportFormInput;
