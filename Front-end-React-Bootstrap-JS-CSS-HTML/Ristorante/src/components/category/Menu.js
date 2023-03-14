import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from "react-icons/bs";

import { BiDish } from "react-icons/bi";
import Antipasto from "../img/Antipasti.avif";
import Primo from "../img/Primo.jpg";
import Secondo from "../img/Secondo.jpg";
import Bevande from "../img/Bevande.jpg";
import Dessert from "../img/dessert.jpg";
import Cart from "../Cart";
import { ModalInsert } from "../ModalInsert";
export const Menu = ({ edit, add, del, cartProducts, reset }) => {
  const { tableId } = useParams();
  const { elId } = useParams();
  const [show, setShow] = useState(false);
  const[type,setType]= useState("")

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChangeType=(el)=>{
    setType(el)

  }

  return (
    <Row>
      {tableId === "Managmentyourprodacts" ? (
        <Row className=" d-flex  justify-content-between justify-content-evenly flex-wrap ">
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="my-5">
              <Button
                className=" btn-dark accordion-button"
                onClick={() => {
                  handleShow();
                  handleChangeType("Antipasto");
                }}
              >
                <Card.Img variant="top" src={Antipasto} />
              </Button>
              <Card.Body>
                <Card.Title>
                  <h4 className="text-center">Antipasti</h4>
                  <ModalInsert
                    showModal={show}
                    closeModal={handleClose}
                    type={type}
                  />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="my-5">
              <Button
                className=" btn-dark accordion-button"
                onClick={() => {
                  handleShow();
                  handleChangeType("Primo");
                }}
              >
                <Card.Img variant="top" src={Primo} />
              </Button>
              <Card.Body>
                <Card.Title>
                  <h4 className="text-center">Primo Piatto</h4>
                  <ModalInsert showModal={show} closeModal={handleClose} />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="my-5">
              <Button
                className=" btn-dark accordion-button"
                onClick={() => {
                  handleShow();
                  handleChangeType("Secondo");
                }}
              >
                <Card.Img variant="top" src={Secondo} />
              </Button>
              <Card.Body>
                <Card.Title>
                  <h4 className="text-center">Secondo Piatto</h4>
                  <ModalInsert showModal={show} closeModal={handleClose} />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="my-5">
              <Button
                className=" btn-dark accordion-button"
                onClick={() => {
                  handleShow();
                  handleChangeType("Dessert");
                }}
              >
                <Card.Img
                  variant="top"
                  src={Dessert}
                  style={{ width: "18rem", height: "12rem" }}
                />
              </Button>
              <Card.Body>
                <Card.Title>
                  <h4 className="text-center">Dessert</h4>
                  <ModalInsert showModal={show} closeModal={handleClose} />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="my-5">
              <Button
                className=" btn-dark accordion-button"
                onClick={() => {
                  handleShow();
                  handleChangeType("WINE & DRINK");
                }}
              >
                <Card.Img
                  variant="top"
                  src={Bevande}
                  style={{ width: "18rem", height: "12rem" }}
                />
              </Button>
              <Card.Body>
                <Card.Title>
                  <h4 className="text-center">WINE & DRINK</h4>
                  <ModalInsert
                    showModal={show}
                    closeModal={handleClose}
                    type={type}
                  />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row className=" d-flex  justify-content-between justify-content-evenly flex-wrap ">
          <Cart
            add={add}
            del={del}
            cartProducts={cartProducts}
            tableId={tableId}
            reset={reset}
            elId={elId}
          />
          <Col xs={12} md={6} lg={4}>
            <Link
              to={`/table/${tableId}/antipasto`}
              className=" text-decoration-none text-reset text-center"
            >
              <Card style={{ width: "18rem" }} className="my-5">
                <Card.Img variant="top" src={Antipasto} />
                <Card.Body>
                  <Card.Title>Antipasti</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Link
              to={`/table/${tableId}/primo`}
              className=" text-decoration-none text-reset text-center"
            >
              <Card style={{ width: "18rem" }} className="my-5">
                <Card.Img variant="top" src={Primo} />
                <Card.Body>
                  <Card.Title>Primi Piatti</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Link
              to={`/table/${tableId}/secondo`}
              className=" text-decoration-none text-reset text-center"
            >
              <Card style={{ width: "18rem" }} className="my-5">
                <Card.Img variant="top" src={Secondo} />
                <Card.Body>
                  <Card.Title>Secondi Piatti</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Link
              to={`/table/${tableId}/dessert`}
              className=" text-decoration-none text-reset text-center"
            >
              <Card
                style={{ width: "18rem", height: "16rem" }}
                className="my-5"
              >
                <Card.Img
                  variant="top"
                  src={Dessert}
                  style={{ width: "18rem", height: "16rem" }}
                />
                <Card.Body>
                  <Card.Title>Dessert</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Link
              to={`/table/${tableId}/drink`}
              className=" text-decoration-none text-reset text-center"
            >
              <Card style={{ width: "18rem" }} className="my-5">
                <Card.Img variant="top" src={Bevande} />
                <Card.Body>
                  <Card.Title>Wine&Drink</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      )}
    </Row>
  );
};
