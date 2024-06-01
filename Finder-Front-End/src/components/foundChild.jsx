import Joi from "joi-browser";
import React from "react";
import HrWithText from "./common/hrWithText";
import LoginButton from "./common/loginButton";
import ReportFormInput from "./common/reportformInput";
import { inputs } from "./common/reportformdata";
import Form from "./common/form";
import { foundGet, foundPost, foundPut } from "../services/Found";
import { getCurrentUser } from "../services/authServices";

class FoundChild extends Form {
  state = {
    from: inputs(), // data is coming from 'reportformdata' modules
    file: "",
    route: null,
    imagePreviewUrl: "",
    /* prettier-ignore */
    data: {
      // this field is for handling onchange event on input fields
      missing_fname   : "",
      missing_mname   : "",
      missing_lname   : "",
      missing_gender  : "",
      missing_age     : "",
      user_fname      : "",
      user_mname      : "",
      user_lname      : "",
      user_contact_1  : "",
      user_contact_2  : "",
    },
    errors: {},
  };

  /* prettier-ignore */
  schema = {
    missing_fname   : Joi.string().min(3).required().label("Name"),
    missing_mname   : Joi.string().min(3).required().label("M-Name"),
    missing_lname   : Joi.string().min(3).required().label("L-Name"),
    missing_gender  : Joi.string().min(4).required().label("Gender"),
    missing_age     : Joi.number().min(1).max(100).required().label("Age"),
    user_fname      : Joi.string().min(3).required().label("Name"),
    user_mname      : Joi.string().min(3).required().label("M-Name"),
    user_lname      : Joi.string().min(3).required().label("L-Name"),
    user_contact_1  : Joi.required().label("Number"),
    user_contact_2  : Joi.label("Number"),
  };

  async componentDidMount() {
    try {
      if (getCurrentUser().Found) {
        const id = this.props.location.state.id;
        const Response = await foundGet(id);
        /* prettier-ignore */
        this.setState({
          data: {
            ...this.state.data,
            missing_fname   : Response.data[0].Fname,
            missing_mname   : Response.data[0].Mname,
            missing_lname   : Response.data[0].Lname,
            missing_gender  : Response.data[0].Gender,
            missing_age     : Response.data[0].Age,
            user_fname      : Response.data[0].User_Fname,
            user_mname      : Response.data[0].User_Mname,
            user_lname      : Response.data[0].User_Lname,
            user_contact_1  : Response.data[0].Contact_1,
            user_contact_2  : Response.data[0].Contact_2,
          },
          imagePreviewUrl: "data:image/jpeg;base64," + Response.data[0].Image,
          route: this.props.location.state.request,
          id
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  handleOnClick = async () => {
    try {
      const { data, file, route, id } = this.state;
      console.log(file, data);
      if (route === "Put") {
        await foundPut(data, file, id);
      } else {
        await foundPost(data, file);
      }
      this.props.history.replace("/reportEdit");
    } catch (error) {
      console.error(error);
    }
  };

  inputs(start, end) {
    const { from, data, errors } = this.state;
    let array = [];
    for (let i = start; i <= end; i++) {
      array[i] = (
        // this one is calling the input module
        <ReportFormInput
          key={from[i].id}
          type={from[i].type}
          classes={from[i].classes}
          label={from[i].label}
          formid={from[i].formid}
          value={data[from[i].formid]}
          onChange={this.handleChange}
          error={errors[from[i].formid]}
        />
      );
    }
    return array;
  }

  render() {
    return (
      <React.Fragment>
        <div className=" missing-div pt-5 pb-3 ">
          <div className="container missing-form-div mb-4">
            <div className="heading text-center mt-3 mb-0">
              <h1 className="text-center font-weigth-bold text-dark">Found</h1>
              <p className="text-capitalize pt-1 text-dark">
               Please provide the details to help the missing person
              </p>
            </div>

            <form onSubmit={this.handleSubmit} className="w-100 h-100">
              <div className="d-flex justify-content-center">
                {this.imagePreview()}
              </div>
              <HrWithText name={"Enter Missing Person Details"} />
              <div className="form-row ">{this.inputs(0, 2)}</div>

              <div className="form-row">
                {this.gender()}
                {this.inputs(3, 3)}
              </div>

              <HrWithText name={"Enter User Details To Contact"} />
              <div className="form-row">{this.inputs(7, 9)}</div>
              <div className="form-row">{this.inputs(11, 12)}</div>
              <LoginButton buttonName={"Save"} classes={"p-2"} />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FoundChild;
