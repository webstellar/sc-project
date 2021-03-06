import React, { Fragment } from "react";
import AdminSideBar from "./AdminSideBar";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs={4} md={2}>
            <AdminSideBar />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
