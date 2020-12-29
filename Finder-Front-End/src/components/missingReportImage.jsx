import React from "react";
import Form from "./common/form";

class MissingReportImg extends Form {
  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img className=" w-100 h-75  " src={imagePreviewUrl} alt="" />
      );
    }

    return (
      <div className="missing-carousel-div mt-3 mb-4 ">
        <div className=" ml-2 mr-2 d-flex justify-content-center align-content-center ">
          <div className="missing-img-div">
            {$imagePreview}
            {/* <form onSubmit={this._handleSubmit}> */}
            <input
              className="pt-1"
              type="file"
              accept="image/*"
              name="image"
              onChange={this._handleImageChange}
              style={{ width: 200 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MissingReportImg;
