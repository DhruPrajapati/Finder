import React, { Component } from "react";
import logo from "../images/logo.jpeg";
import Dhru from "../images/Dhru.jpg";
import TestimonialBox from "./common/testimonialBox";

class Testimonial extends Component {
  state = {
    Team: [
      {
        id: 1,
        value: [
          { img: logo },
          { name: "Aryan Patel" },
          { heading: "Web Developer" },
          {
            discription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo porro labore? Sit aspernatur iure veniam eum.",
          },
        ],
      },
      {
        id: 2,
        value: [
          { img: Dhru },
          { name: "Dhru prajapati" },
          { heading: "FullStack Developer" },
          {
            discription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo porro labore? Sit aspernatur iure veniam eum.",
          },
        ],
      },
      {
        id: 3,
        value: [
          { img: logo },
          { name: "Dimple Jadhev" },
          { heading: "Web Developer" },
          {
            discription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo porro labore? Sit aspernatur iure veniam eum.",
          },
        ],
      },
    ],
  };
  render() {
    return (
      <section className="testimonial" id={"testimonialid"}>
        <div className="container heading text-center">
          <h1 className="text-center font-weight-bold text-uppercase">
            Testimonial
          </h1>
          <p className="text-center text-capitalize pt-1">
            Our Developer Team for Following Project
          </p>
        </div>
        <div className="container">
          <div className="  row">
            {this.state.Team.map((team) => (
              <TestimonialBox
                key={team.id}
                img={team.value[0].img}
                name={team.value[1].name}
                heading={team.value[2].heading}
                discription={team.value[3].discription}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
