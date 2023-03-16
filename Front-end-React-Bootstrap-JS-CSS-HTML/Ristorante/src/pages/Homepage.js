import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/css/style.css";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";

export const Homepage = () => {
  return (
    <>
    <div>
      <Sidebar />
     
    </div>
    <footer className=" footer fixed-bottom ">
     <Container  className=" mb-0 bg-black text-white text-center   ">
        <ul className=" list-unstyled ">
          Contatti:
          <li>tel 08016180032</li>
          <li>cell 3896492143</li>
          <li>Facebook </li>
        </ul>
      </Container>
      </footer></>
  );
};
