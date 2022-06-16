import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";

import { useSelector } from "react-redux";

const HeaderNav = () => {
  const { user, loading } = useSelector((state) => state.auth);

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
            {user ? <LoggedIn user={user} /> : !loading && <NotLoggedIn />}
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default HeaderNav;
