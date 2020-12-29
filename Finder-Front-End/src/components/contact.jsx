import React, { Component } from "react";
import ContactInput from "./common/contactInput";

class Contact extends Component {
  render() {
    return (
      <section className="contactus " id="contactid">
        <div className="container heading text-center pt-2">
          <h1 className="text-center font-weigth-bold">CONTACT US</h1>
          <p className="text-capitalize pt-1">
            we're here to help and answer any question you might have. we look
            forward to hearing from you
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1 ">
              <form>
                <ContactInput placeholder={"Enter Your Name"} id={"username"} />

                <ContactInput placeholder={"Enter Email"} id={"Email"} />
                <ContactInput
                  placeholder={"Enter Mobile Number"}
                  id={"Number"}
                />
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="4"
                    id="comment"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div className="d-flex justify-content-center form-button">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
