import React, { Fragment } from "react";
import { Container, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Fragment>
      <Container className="text-center">
        <Spinner animation="grow" size="sm" role="status" />
        <Spinner animation="grow" size="sm" role="status" />
        <Spinner animation="grow" size="sm" role="status" />
      </Container>
    </Fragment>
  );
};

export default Loader;
