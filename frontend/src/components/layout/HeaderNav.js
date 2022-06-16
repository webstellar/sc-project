import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";

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
            <NotLoggedIn />
            <LoggedIn />
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default HeaderNav;
