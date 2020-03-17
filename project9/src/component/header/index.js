import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import './header.css';

export default function Header() {
 
  return (
    <React.Fragment>
      {/* <Link to="/">Home</Link>
     <Link to="/Meetup">Create Meetup</Link>
     <Link to="/Explore">Explore</Link> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand ><Link to="/" style={{textDecoration:'none', color:'#ffffff',}}>QTemu</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/Meetup" className="slink">Create Meetup</Link></Nav.Link>
            <Nav.Link><Link to="/Explore" className="slink">Explore</Link></Nav.Link>
          </Nav>
          <Nav>
            <Link to="#deets">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
