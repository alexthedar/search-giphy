import React from "react";
import { Image, Modal } from "react-bootstrap";

export const SelectedImage = props => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={() => props.onHide()}
    >
      <Image
        style={{ display: "flex", margin: "auto", padding: "1rem" }}
        src={props.selected}
        fluid
      />
    </Modal>
  );
};

export default SelectedImage;
