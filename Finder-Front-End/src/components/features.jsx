import React, { Component } from "react";
import { getCurrentUser } from "../services/authServices";
import HoverBox from "./common/featurehoverBox";

class Features extends Component {
  state = {
    notify: true,
    hoverBox: [
      {
        id: 1,
        value: [
          { icon: "search" },
          { heading: "Found Child" },
          { link: this.Found() },
          { route: "/foundlist" },
          {
            discription:
              "If you've found a missing child, upload their photo here to help us match them with reported missing persons using our facial recognition technology.",
          },
        ],
      },
      {
        id: 2,
        value: [
          { icon: "address-card" },
          { heading: "Missing Report" },
          { link: this.Report() },
          { route: "/MissingReport" },
          {
            discription:
              "Report a missing person by providing their photo and relevant details to initiate a search using our advanced system.",
          },
        ],
      },
      {
        id: 3,
        value: [
          { icon: "picture-o" },
          { heading: "Gallary" },
          { link: "/gallary" },
          { route: "" },
          {
            discription:
              "Browse through the gallery of missing persons and found individuals. Your observation could help reunite a family.",
          },
        ],
      },
      {
        id: 4,
        value: [
          { icon: "envelope" },
          { heading: "Notification" },
          { link: "/Notification" },
          { route: "" },
          {
            discription:
              "Receive real-time notifications and updates about missing persons and potential matches with found individuals.",
          },
        ],
      },
    ],
  };

  Found() {
    const user = getCurrentUser();
    if (user) return user.Found ? "/reportEdit" : "/foundchild";
    return "/foundchild";
  }
  Report() {
    const user = getCurrentUser();
    if (user) return user.Missing ? "/reportEdit" : "/MissingReport";
    return "/MissingReport";
  }

  render() {
    return (
      <section className="header-extra-div " id={"featureid"}>
        <div className="container heading text-center">
          <h1 className="text-center font-weight-bold text-uppercase">
            Our Features
          </h1>
          <p className="text-center text-capitalize pt-1">
            This are the following Features
          </p>
        </div>
        <div className="container ">
          <div className="row gx-5">
            {this.state.hoverBox.map((hoverbox) => (
              <HoverBox
                key={hoverbox.id}
                icon={hoverbox.value[0].icon}
                heading={hoverbox.value[1].heading}
                link={hoverbox.value[2].link}
                route={hoverbox.value[3].route}
                discription={hoverbox.value[4].discription}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
