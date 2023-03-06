import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/css/style.css";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";


export const Homepage = () => {
 return (
   <div>
     <Navbar bg="light" expand="lg">
       <Container>
         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="/table">Tavoli</Nav.Link>
           </Nav>
         </Navbar.Collapse>
         <Link to="/admin">
           <MdAccountCircle size={"50px"} />
         </Link>
       </Container>
     </Navbar>
   </div>
 );
};
