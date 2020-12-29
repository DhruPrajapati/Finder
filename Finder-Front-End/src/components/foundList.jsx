import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "./common/table";
import { foundListDelete, foundListGet } from "./../services/foundList";

class FoundList extends Component {
  state = {
    /* prettier-ignore */
    heading: ["Image", "Fname", "Mname", "Lname", "Age", "Gender", "Edit", "Delete"],
    tableData: [],
  };

  async componentDidMount() {
    try {
      const Response = await foundListGet();
      if (Response) {
        let tableData = [];
        Response.data.map((data) => {
          const rawData = [
            data._id,
            { key: "Imagepreview", contant: this.imagePreview(data.Image) },
            data.Fname,
            data.Mname,
            data.Lname,
            data.Age,
            data.Gender,
            {
              key: "edit",
              contant: this.editButton("Edit", "warning", data._id),
            },
            {
              key: "delete",
              contant: this.deleteButton("Delete", "danger", data._id),
            },
          ];
          return tableData.push(rawData);
        });
        this.setState({
          tableData,
          visible: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  imagePreview(Image) {
    return (
      <div className="w-100 d-flex justify-content-center">
        <div className="notification-img-div">
          <img
            className=" w-100 h-100  "
            src={"data:image/jpeg;base64," + Image}
            alt=""
          />
        </div>
      </div>
    );
  }

  editButton(name, btnclass, id) {
    return (
      <Link
        to={{
          pathname: "/foundchild",
          state: {
            id: id,
            request: "Put",
          },
        }}
      >
        <button className={`btn btn-${btnclass}`}>{name}</button>
      </Link>
    );
  }

  deleteButton(name, btnclass, id) {
    return (
      <button
        className={`btn btn-${btnclass}`}
        onClick={() => this.editList(id)}
      >
        {name}
      </button>
    );
  }

  editList = async (id) => {
    const OriginalData = this.state.tableData;
    const tableData = this.state.tableData.filter(
      (tabledata) => tabledata[0] !== id
    );

    this.setState({ tableData });
    try {
      await foundListDelete(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("this Row has already been deleted");

      this.setState({ tableData: OriginalData });
    }
  };

  render() {
    const { heading, tableData } = this.state;
    return (
      <Table
        heading={heading}
        tableData={tableData}
        buttonName={"Add more"}
        takeroute={"/foundchild"}
      />
    );
  }
}

export default FoundList;
