import React, { Component } from "react";

class GroupInput extends Component {
  render() {
    const { value, handleChange, Filters, handleItems } = this.props;
    return (
      <div className=" w-100 d-flex justify-content-center">
        <div className="input-group pb-5 w-75 ">
          <input
            type="text"
            className="form-control news-letter"
            placeholder="Search By First, Middle Or Last Name"
            aria-label="Text input with dropdown button"
            value={value}
            onChange={handleChange}
          />
          <div className="input-group-append ">
            <button
              className="btn btn-outline-primary dropdown-toggle input-group-text"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <b>Filter By</b>
            </button>
            <div className="dropdown-menu dropdown_items">
              {Filters.map((filter) => {
                return (
                  <button
                    className="dropdown-item "
                    key={filter}
                    onClick={() => handleItems(filter)}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupInput;
