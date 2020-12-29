import React, { useState } from "react";
import Model from "./common/model";

function Photos({ Data }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="col-sm-12 col-md-6  col-lg-4 pb-5">
        <div className="gallary-img-div ">
          <img
            src={"data:image/jpeg;base64," + Data.Image}
            className=" w-100 h-100 "
            onClick={() => setModalShow(true)}
            alt=""
          />
          <Model
            show={modalShow}
            onHide={() => setModalShow(false)}
            Data={Data}
          />
        </div>
      </div>
    </>
  );
}

export default Photos;
