import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { postOrder, getTableById, putUser, getFoords } from "../../api";
import { FoodList } from "../FoodList";
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
export const OrderCategory = ({ edit, add, del, cartProducts, reset }) => {
  const { tableId } = useParams();
  const navigate = useNavigate();

  return (
    <Row className=" d-flex  justify-content-between justify-content-evenly flex-wrap ">
      <Cart
        add={add}
        del={del}
        cartProducts={cartProducts}
        tableId={tableId}
        reset={reset}
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
          <Card style={{ width: "18rem", height: "16rem" }} className="my-5">
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
  );
};
