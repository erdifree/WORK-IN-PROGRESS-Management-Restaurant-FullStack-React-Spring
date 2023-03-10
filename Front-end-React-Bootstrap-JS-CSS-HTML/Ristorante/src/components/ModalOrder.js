import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { updatePayment } from "../api";

export const ModalOrder = ({ getOrder, update }) => {
  console.log({ update });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("Id che mi serveeeeeee", getOrder.id);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <BsFillPatchCheckFill className="text-light" size={"40px"} />
      </Button>
      <Modal show={show} onHide={handleClose} className=" d-flex text-center">
        <Modal.Body>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              update(getOrder.id);
              handleClose();
            }}
          >
            Click to confirm payment
          </Button>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
