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
    <>
      <Navbar bg="dark" className=" justify-content-between  fixed-top mb-5">
        <Col sx={12} lg={2} className="mt-2">
          <Link to="/order">
            <Button>
              <AiFillSetting />
              Ordini
            </Button>
          </Link>
        </Col>
        <Col sx={12} lg={2} className="mt-2">
          <Button>
            <AiFillSetting />
            Piatti
          </Button>
        </Col>
        <Col sx={12} lg={2} className="mt-2">
          <Link to="/managmentPaymentPage">
            <Button>
              <AiFillSetting />
              Cassa
            </Button>
          </Link>
        </Col>

        <Col sx={12} lg={2} className="mt-2">
          <Link to="/">
            <Button variant="outline-success">
              <AiFillSetting />
              Home
            </Button>
          </Link>
        </Col>

        <Col sx={12} lg={2} className="mt-2">
          <Link to="/admin">
            <Button variant="outline-success">
              <AiFillSetting />
              Admin
            </Button>
          </Link>
        </Col>
        <Col sx={12} lg={2} className="mt-2  ms-5">
          <Link to="/table">
            <Button variant="outline-success">
              <AiFillSetting />
              Tavoli
            </Button>
          </Link>
        </Col>
      </Navbar>
    </>
  );
};
