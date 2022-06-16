import React, { Fragment } from "react";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default NotLoggedIn;
