import React, { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = { data: {}, errors: {}, file: {}, imagePreviewUrl: "" };

  validate = () => {
    const options = {
      abortEarly: true,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (error) return null;
    return error ? error.details[0].message : null;
  };

  _handleImageChange = async (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    await this.setState({ file });
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log(errors);
    if (errors) return;

    this.handleOnClick();
  };

  states = () => {
    return (
      <div className="form-group col-md-4">
        <label htmlFor="missing_state">State</label>

        <select
          id="missing_state"
          name="missing_state"
          className="form-control"
          onChange={this.handleChange}
          style={
            this.state.errors.missing_state
              ? { boxShadow: "0px 0px 5px red" }
              : {}
          }
        >
          <option defaultValue>Choose...</option>
          <option value="Gujrat">Gujrat</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Chennai">Chennai</option>
          <option value="Punjab">Punjab</option>
          <option value="select">Bengal</option>
        </select>
      </div>
    );
  };

  gender = () => {
    return (
      <div
        className="form-group col-sm-12 col-md-6  col-lg-4 "
        style={{ position: "relative" }}
      >
        <label className=" col-form-label pt-0 pr-2 pl-1">Gender</label>
        <div
          className="form-check form-check-inline "
          style={{
            position: "absolute",
            marginTop: 39,
            left: 8,
          }}
        >
          <input
            className="form-check-input"
            type="radio"
            onChange={this.handleChange}
            name="missing_gender"
            id="missing_male"
            value="Male"
          />
          <label className="form-check-label" htmlFor="missing_male">
            Male
          </label>
        </div>
        <div
          className="form-check form-check-inline"
          style={{ position: "absolute", marginTop: 39, left: 71 }}
        >
          <input
            className="form-check-input"
            type="radio"
            onChange={this.handleChange}
            name="missing_gender"
            id="missing_female"
            value="Female"
          />
          <label className="form-check-label" htmlFor="missing_female">
            Female
          </label>
        </div>
        <div
          className="form-check form-check-inline"
          style={{ position: "absolute", marginTop: 39, left: 150 }}
        >
          <input
            className="form-check-input"
            type="radio"
            onChange={this.handleChange}
            name="missing_gender"
            id="missing_other"
            value="Other"
          />
          <label className="form-check-label" htmlFor="missing_other">
            Other
          </label>
        </div>
      </div>
    );
  };

  imagePreview = () => {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img className=" w-100 h-75  " src={imagePreviewUrl} alt="" />
      );
    }
    return (
      <div className="missing-carousel-div mt-3 mb-4 ">
        <div className=" ml-2 mr-2 d-flex justify-content-center align-content-center ">
          <div className="missing-img-div">
            {$imagePreview}
            <input
              className="pt-1"
              type="file"
              accept="image/*"
              name="image"
              onChange={this._handleImageChange}
              style={{ width: 200 }}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default Form;
