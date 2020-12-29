import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./loginButton";

//pass the heading Props
//pass the data props

class Table extends Component {
  generateKey(data) {
    return typeof data === "object" ? data.key : data;
  }

  displayData(data) {
    return typeof data === "object" ? data.contant : data;
  }

  render() {
    const { heading, tableData } = this.props;
    return (
      <div className=" missing-div pt-5">
        <div className="container-fluid  d-flex justify-content-center ">
          <div className="table-responsive table-width ">
            <table className="table ">
              <thead>
                <tr>
                  {heading.map((head) => {
                    return (
                      <th className=" text-center align-middle " key={head}>
                        {head}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {tableData.map((tabledata) => {
                  let count = 0;
                  return (
                    <tr key={tabledata[0]}>
                      {tabledata.map((data) => {
                        if (count === 0) {
                          count = count + 1;
                          return null;
                        } else {
                          return (
                            <td
                              key={this.generateKey(data)}
                              className=" text-center align-middle "
                            >
                              {this.displayData(data)}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Link to={this.props.takeroute}>
          <LoginButton buttonName={this.props.buttonName} classes={"pb-3"} />
        </Link>
      </div>
    );
  }
}

export default Table;
