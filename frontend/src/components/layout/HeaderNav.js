import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./layout.css";

const HeaderNav = () => {
  return (
    <Fragment>
      <Navbar className="mb-5">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={require("../../images/socialcoin.png")}
              alt="Logo"
              style={{ width: 200, height: 63 }}
            />
          </Navbar.Brand>
          <Nav className="header-font justify-content-end ">
            <Nav.Link as={Link} to="/our-story">
              Our story
            </Nav.Link>
            <Nav.Link as={Link} to="/discover">
              Discover
            </Nav.Link>
            <Nav.Link as={Link} to="/sign-in">
              Sign in
            </Nav.Link>
            <Button className="header-button" variant="secondary" size="sm">
              Get started
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default HeaderNav;
