import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Navbar, Nav, Tabs, Tab, Row, Col } from "react-bootstrap";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";

import { BsPencil, BsPlus } from "react-icons/bs";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`My Profile`} />
          <Container>
            <Navbar bg="none" className="mb-5">
              <Container>
                <h2 className="fw-bolder">Dashboard</h2>
                <Nav>
                  <button
                    type="button"
                    className="btn btn-dark rounded-pill px-4"
                  >
                    <BsPlus />
                    APPRECIATE
                  </button>
                </Nav>
              </Container>
            </Navbar>
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-lg-5"
            >
              <Tab eventKey="home" title="Given" className="sc-tab">
                Given
              </Tab>
              <Tab eventKey="received" title="Received" className="sc-tab">
                Received
              </Tab>
              <Tab eventKey="my-profile" title="My Profile" className="sc-tab">
                <Container>
                  <Row md={6} className="align-content mb-5">
                    <Col>
                      <img
                        src={user.profilePicture && user.profilePicture.url}
                        alt={user && user.name}
                        width="150"
                        height="150"
                        className="rounded-circle align-self-center"
                        style={{ horizontalAlign: "center" }}
                      />
                    </Col>
                    <Col xs={10} className="align-self-center">
                      <span
                        className="d-flex fw-bold"
                        style={{ fontSize: "20px" }}
                      >
                        {user.name}
                      </span>
                      <span className="d-flex">{user.email}</span>
                      <span className="d-flex">
                        <span className="pe-1 fw-bold mb-2">Date Joined:</span>
                        {String(user.createdAt).substring(0, 10)}
                      </span>
                      <span>
                        <button
                          type="button"
                          className="btn btn-dark rounded-pill px-4"
                        >
                          <BsPlus />
                          Edit Profile
                        </button>
                      </span>
                    </Col>
                  </Row>
                  <Row md={4}>
                    <Col>
                      <span
                        className="text-uppercase d-flex"
                        style={{ fontSize: "14px" }}
                      >
                        Total Appreciation Given
                      </span>
                      <span className="d-flex display-4">20</span>
                    </Col>
                    <Col>
                      <span
                        className="text-uppercase d-flex"
                        style={{ fontSize: "14px" }}
                      >
                        Total Appreciation Given
                      </span>
                      <span className="d-flex display-4">20</span>
                    </Col>
                    <Col>
                      <span
                        className="text-uppercase d-flex"
                        style={{ fontSize: "14px" }}
                      >
                        Total Appreciation Given
                      </span>
                      <span className="d-flex display-4">20</span>
                    </Col>
                    <Col>
                      <span
                        className="text-uppercase d-flex"
                        style={{ fontSize: "14px" }}
                      >
                        Total Appreciation Given
                      </span>
                      <span className="d-flex display-4 text-center">20</span>
                    </Col>
                  </Row>
                </Container>
              </Tab>
            </Tabs>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
