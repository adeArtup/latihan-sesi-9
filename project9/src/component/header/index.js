import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
            QTemu
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/Meetup" className="slink">
                Create Meetup
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Explore" className="slink">
                Explore
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Link to="#login" className="slink">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
