import React, { Component } from "react";
import logo from "../images/aryan.jpeg";
import Dhru from "../images/Dhru.jpg";
import Vandana from "../images/Vandana.avif";
import TestimonialBox from "./common/testimonialBox";

class Testimonial extends Component {
  state = {
    Team: [
      {
        id: 1,
        value: [
          { img: logo },
          { name: "" },
          { heading: "Aryan Patel" },
          {
            discription:
              "Thanks to this incredible website, I found my missing friend within days. The search tools and community support were outstanding.",
          },
        ],
      },
      {
        id: 2,
        value: [
          { img: Dhru },
          { name: "" },
          { heading: "Dhru Prajapati." },
          {
            discription:
              "I reconnected with my lost uncle thanks to this service. facial recognition technology and detailed database made all the difference.",
          },
        ],
      },
      {
        id: 3,
        value: [
          { img: Vandana },
          { name: "" },
          { heading: "Vandana Jain" },
          {
            discription:
              "This site reunited me with my sister after two years of searching. The support and resources provided were invaluable.",
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
            People we helped till now
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
