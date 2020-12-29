import React, { Component } from "react";
import { gallaryGet } from "./../services/gallary";
import Photos from "./photos";
import GroupInput from "./common/groupInput";

class Gallary extends Component {
  state = {
    data: [],
    search: "",
    SearchResult: [],
    Filters: ["Newest to Oldest", "Oldest to Newest", "Male", "Female"],
  };

  async componentDidMount() {
    try {
      const Response = await gallaryGet();
      if (Response) {
        this.setState({ data: Response.data.reverse() });
      }
    } catch (error) {}
  }

  handleSearch = ({ currentTarget: input }) => {
    const { data } = this.state;
    let search = input.value;
    this.setState({ search });
    let SearchResult = data.filter((Data) => {
      return `${Data.Fname} ${Data.Mname} ${Data.Lname}`
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    this.setState({ SearchResult });
  };

  handleItems = (filter) => {
    const { Filters, data } = this.state;
    const OriginalData = [...data];
    const reverseData = [...data].reverse();

    if (filter === Filters[0]) {
      this.setState({ SearchResult: data });
    }
    if (filter === Filters[1]) {
      this.setState({ SearchResult: reverseData });
    }
    if (filter === Filters[2]) {
      let result = OriginalData.filter((Data) => {
        return `${Data.Gender}`.toLowerCase() === filter.toLowerCase();
      });
      this.setState({ SearchResult: result });
    }
    if (filter === Filters[3]) {
      let result = OriginalData.filter((Data) => {
        return `${Data.Gender}`.toLowerCase() === filter.toLowerCase();
      });
      this.setState({ SearchResult: result });
    }
  };

  render() {
    const { data, search, SearchResult, Filters } = this.state;
    return (
      <div className="container pt-5 bg-white ">
        <div className="gallary-head">
          <h1 className="font-weight-bold text-center text-dark ">
            Missing Peoples
          </h1>
          <p className="text-capitalize text-center">
            To see details of person in Image click on the Images
          </p>
          <hr className=" w-50 mx-auto pt-5 pb-0 my-0" />
        </div>
        <GroupInput
          value={search}
          handleChange={this.handleSearch}
          Filters={Filters}
          handleItems={this.handleItems}
        />
        <div className="row ">
          {(SearchResult.length !== 0 ? SearchResult : data).map((Data) => {
            return <Photos Data={Data} key={Data._id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Gallary;
