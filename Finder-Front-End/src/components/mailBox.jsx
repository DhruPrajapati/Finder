import React, { Component } from "react";

class MailBox extends Component {
  state = {};
  render() {
    return (
      <section className="newsletter" id="newsletterid">
        <div className="container heading text-center">
          <h1 className="text-center font-weigth-bold text-capitalize">
            Subcribe to News-letter
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-12 ">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control news-letter"
                  placeholder="Your Email"
                />
                <div className="input-group-append">
                  <span className="input-group-text">Feedback </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MailBox;
