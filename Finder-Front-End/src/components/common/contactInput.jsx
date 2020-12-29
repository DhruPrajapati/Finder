import React, { Component } from "react";

class ContactInput extends Component {
  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder={this.props.placeholder}
          id={this.props.id}
          autoComplete="off"
          required
        />
      </div>
    );
  }
}

export default ContactInput;
