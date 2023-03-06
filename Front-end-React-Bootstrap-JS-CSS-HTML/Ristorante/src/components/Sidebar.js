import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Offcanvas } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Img from "./img/logonav.avif";
import { AiFillSetting } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [show, setShow] = useState(true);


  return (
    <Offcanvas show={show} backdrop={false} className="alert bg-black ">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className=" text-info ">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container className=" text-light">
          <Row className=" d-flex flex-column  ">
            <Col sx={12} className="mt-5">
              <Link to="/order">
                <Button>
                  <AiFillSetting />
                  Ordini
                </Button>
              </Link>
            </Col>
            <Col sx={12} className="mt-5">
              <Button>
                <AiFillSetting />
                Piatti
              </Button>
            </Col>
            <Col sx={12} className="mt-5">
              <Link to="/managmentPaymentPage">
                <Button>
                  <AiFillSetting />
                  Cassa
                </Button>
              </Link>
            </Col>

            <Col sx={12} className="mt-5">
              <Link to="/">
                <Button variant="outline-success">
                  <AiFillSetting />
                  Home
                </Button>
              </Link>
            </Col>

            <Col sx={12} className="mt-5">
              <Link to="/admin">
                <Button variant="outline-success">
                  <AiFillSetting />
                  Admin
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
