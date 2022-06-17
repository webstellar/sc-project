import React, { Fragment } from "react";

import { ListGroup, Col, Row, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

const ProfileTab = ({ user }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };
  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Row md={4} className="align-content mb-5">
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
                <span className="d-flex fw-bold" style={{ fontSize: "20px" }}>
                  {user.name}
                </span>
                <span className="d-flex">{user.email}</span>
                <span className="d-flex">
                  <span className="pe-1 fw-bold mb-2">Date Joined:</span>
                  {String(user.createdAt).substring(0, 10)}
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
          </Col>
          <Col xs={6} md={3}>
            <ListGroup className="sc-listgroup">
              <ListGroup.Item as={Link} to="/me/update">
                edit profile
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/password/update">
                change password
              </ListGroup.Item>
              <ListGroup.Item>make a donation</ListGroup.Item>
              <ListGroup.Item as={Link} to="/" onClick={logoutHandler}>
                logout
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProfileTab;
