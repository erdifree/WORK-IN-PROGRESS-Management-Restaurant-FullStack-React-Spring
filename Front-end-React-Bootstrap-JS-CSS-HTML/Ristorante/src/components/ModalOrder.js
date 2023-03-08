import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import {  BsFillPatchCheckFill } from "react-icons/bs";
import { updatePayment } from "../api";

export const ModalOrder = ({ getOrder }) => {
  console.log("id ordineeee", getOrder.id);
  const [show, setShow] = useState(false);
  const [pay, setPay] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePay = () => setPay(true);

  const updatePayment = async () => {
    handlePay()
    const result = await updatePayment(getOrder, pay);
    if(result.ok){
       handleClose();
    }
  };

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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updatePayment}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
