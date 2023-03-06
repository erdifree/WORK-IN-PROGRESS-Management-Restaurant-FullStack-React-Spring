import { useState, useEffect } from "react";

import { OrderList } from "../components/OrderList";
import "../components/css/style.css";
import { Sidebar } from "../components/Sidebar";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Admin = () => {
  

 
  return (
    <Container className=" container">
      <Row className=" justify-content-end">
        <Col lg={1}>
          <Sidebar />
        </Col>
        <Col lg={9} >
         <Link to="/">WEEEEEEEEEEEEEEE</Link>
        </Col>
      </Row>
    </Container>
  );
};
