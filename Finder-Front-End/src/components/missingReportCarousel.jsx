import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import MissingReportImg from "./missingReportImage";

class MissingReportCarousel extends Component {
  render() {
    const setting = {
      showArrows: false,
      pagination: false,
    };
    return (
      <div className="missing-carousel-div mt-3 mb-4 ">
        <Carousel {...setting}>
          <MissingReportImg />
        </Carousel>
      </div>
    );
  }
}

export default MissingReportCarousel;
