import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Container,
  Navbar,
  Nav,
  Tabs,
  Tab,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import ProfileTab from "./ProfileTab";

import { BsPlus } from "react-icons/bs";
import { useRef } from "react";

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
                <ProfileTab user={user} />
              </Tab>
            </Tabs>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
