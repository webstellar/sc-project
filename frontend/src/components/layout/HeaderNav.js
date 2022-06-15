import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

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
          <Nav className="text-dark justify-content-end ">
            <Nav.Link as={Link} to="/our-story">
              Our story
            </Nav.Link>
            <Nav.Link as={Link} to="/discover">
              Discover
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Sign in
            </Nav.Link>
            <Button
              className="sc-disablefocus rounded-pill px-4 btn-dark btn-outline-light border-dark pt-2"
              variant="secondary"
              size="sm"
              as={Link}
              to="/register"
            >
              Get started
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default HeaderNav;
