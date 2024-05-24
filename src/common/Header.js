import React from 'react';
import './Header.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Header = () => {
 
  return (
    <div>
      <Navbar expand="lg" className=" wrapper-navbar bg-body-tertiary ">
        <Navbar.Brand href="/" className="custom-navbar-brand">Aerothan 6.0 </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="offcanvasNavbar">
          <Nav className="me-auto">
            <Nav.Link href="/" className="custom-nav-link">Home</Nav.Link>
            <Nav.Link href="/dashboard" className="custom-nav-link">Dashboard</Nav.Link>
            <Nav.Link href="#aboutus" className="custom-nav-link">About us</Nav.Link>
            
          </Nav>
          <a href="#" className="login-button" >Login</a>
        </Navbar.Collapse>
        <Offcanvas placement="end" show={false}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column nav-link custom-offcanvas-body">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Vendors</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <Nav.Link href="#link">Contact us</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        {/* <a href="#login" className="login-button">Login</a> */}
      </Navbar>
    </div>
  )
}

export default Header;