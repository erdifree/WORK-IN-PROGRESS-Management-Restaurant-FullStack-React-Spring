import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { updatePayment } from "../api";

export const ModalOrder = ({ getOrder, update }) => {
  console.log({update});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("Id che mi serveeeeeee", getOrder.id);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <BsFillPatchCheckFill className="text-light" size={"40px"} />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(e) => { e.preventDefault();
              update(getOrder.id);
              handleClose();
            }}
          >
            isPayed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
