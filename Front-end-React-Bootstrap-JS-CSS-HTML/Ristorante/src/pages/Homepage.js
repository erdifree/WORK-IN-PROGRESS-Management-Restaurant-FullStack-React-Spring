import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/css/style.css";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";
import "../components/css/footerStyle.css";
import { Col, Row } from "react-bootstrap";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { BiCopyright } from "react-icons/bi";
export const Homepage = () => {
  return (
    <>
      <Row>
        <Sidebar />
      </Row>
      <Col
        className="footer mt-5 bg-black text-white text-center fixed-bottom"
        id="navbar"
      >
        <Row className=" d-flex justify-content-between">
          <Col>
            <Col className=" text-opacity-100">Contatti:</Col>
            <BsFillTelephoneFill />
            08018160035 <GiSmartphone />: 3896492143
            <Col />
            <AiOutlineInstagram size={"30px"} />
            <Col>
              <BiCopyright /> by Erdison Dosti
            </Col>
          </Col>
        </Row>
      </Col>
    </>
  );
};
