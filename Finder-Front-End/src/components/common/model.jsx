import { Button, Modal } from "react-bootstrap";
import React from "react";

function Model({ Data, onHide, ...props }) {
  return (
    <Modal
      {...props}
      onHide={onHide}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="model ">
          <p>Name : {`${Data.Fname} ${Data.Mname} ${Data.Lname}`}</p>
          <p>Gender : {`${Data.Gender}`}</p>
          <p>Age : {`${Data.Age} `}</p>
          <p>Contact On : {`${Data.Contact_1} `}</p>
          <p>
            Posted By :
            {` ${Data.User_Fname} ${Data.User_Mname} ${Data.User_Lname}`}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Model;
