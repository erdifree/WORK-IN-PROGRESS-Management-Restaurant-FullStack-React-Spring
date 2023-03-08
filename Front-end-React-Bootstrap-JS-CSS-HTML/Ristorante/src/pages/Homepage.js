import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/css/style.css";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";


export const Homepage = () => {
 return (
   <div>
   <Sidebar/>
   </div>
 );
};
