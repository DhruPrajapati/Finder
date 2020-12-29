import React, { Component } from "react";
import { toast } from "react-toastify";
import {
  notificationDelete,
  notificationGet,
  notificationPut,
} from "../services/notification";
import NotificationMsg from "./noficationMsg";
import Table from "./common/table";

class Notification extends Component {
  state = {
    /* prettier-ignore */
    heading :["Image","Name","Age","Gender","UserName","Contact","Conform","Delete",],
    visible: null,
    tableData: [],
  };

  async componentDidMount() {
    try {
      const Response = await notificationGet();

      if (Response) {
        let tableData = [];
        Response.data.map((data) => {
          const rawData = [
            data[0]._id,
            { key: "Imagepreview", contant: this.imagePreview(data[0].Image) },
            data[0].Fname,
            data[0].Age,
            data[0].Gender,
            data[0].email,
            data[0].Contact_1,
            {
              key: "edit",
              contant: this.confirmButton(
                "Confirm",
                "success",
                data[0]._id,
                data[1].show
              ),
            },
            {
              key: "delete",
              contant: this.declineButton(
                "Decline",
                "danger",
                data[0]._id,
                data[1].show
              ),
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
      this.setState({
        visible: false,
      });
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

  confirmButton(name, btnclass, id, show) {
    return (
      <button
        className={`btn btn-${btnclass}`}
        onClick={() => this.handleConfirm(id)}
        disabled={show}
      >
        {name}
      </button>
    );
  }

  declineButton(name, btnclass, id, show) {
    return (
      <button
        className={`btn btn-${btnclass}`}
        onClick={() => this.handleDecline(id)}
        disabled={show}
      >
        {name}
      </button>
    );
  }

  handleConfirm = async (id) => {
    try {
      await notificationPut(id);
      toast("We'll send Notification to this user");
    } catch (error) {
      toast.error("Something Want Wrong");
    }
  };

  handleDecline = async (id) => {
    const OriginalData = this.state.tableData;
    const tableData = this.state.tableData.filter(
      (tabledata) => tabledata[0] !== id
    );
    this.setState({ tableData });
    try {
      await notificationDelete(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("this Row has already been deleted");

      this.setState({ tableData: OriginalData });
    }
  };

  displayContant() {
    const { visible, tableData, heading } = this.state;

    if (visible === null) return <div></div>;
    else if (visible) {
      return (
        <Table
          heading={heading}
          tableData={tableData}
          buttonName={"Done!!!"}
          takeroute={"/"}
        />
      );
    } else return <NotificationMsg />;
  }

  render() {
    return <React.Fragment>{this.displayContant()}</React.Fragment>;
  }
}

export default Notification;
