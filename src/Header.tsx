import React from "react";
// import Logo from './img/doyen1.png';
// import { Redirect } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav
  // Form,
  // FormControl,
  // Button
} from "react-bootstrap";

// const linkStyle = {
//   textDecoration: "underline"
// };

const navBarStyles = {
  backgroundColor: "#14574F",
  backgroundImage: "linear-gradient(0deg, #6A1724 0%, #6A1724 100%);",
  // boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)"
};
const Header: React.FC = () => {
  return (
    <div>
      <Navbar
        // bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        style={navBarStyles}
      >
        <Container>
          <Navbar.Brand><h4 style={{color:"#F4B92D"}}> the sola <br/> Photography</h4> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-5 p-3" >
              <Nav.Link href="/" className="ms-5" style={{color:"#ffffff"}}> <h5>Home</h5> </Nav.Link>
              <Nav.Link href="/Portfolio" className="ms-4" style={{color:"#ffffff"}}> <h5>Portfolio</h5></Nav.Link> 
              <Nav.Link href="/About" className="ms-4" style={{color:"#ffffff"}}> <h5>About</h5></Nav.Link>
              <Nav.Link href="/Hello" className="ms-4" style={{color:"#ffffff"}}> <h5>Say Hello</h5></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="nav-scroller bg-white shadow-sm">
        <Container>
          <nav className="nav nav-underline">
          </nav>
        </Container>
      </div>
    </div>
  );
};
export default Header;
