import React, { Fragment } from "react";
import { Dropdown, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBell, BsChevronDown, BsArrowUpRight } from "react-icons/bs";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";

const LoggedIn = ({ user }) => {
  //TODO: set State for Notification
  //TODO: Pull list of notifications

  const dispatch = useDispatch();

  const [notification, setNotification] = useState("unread messages");

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };

  return (
    <Fragment>
      <Dropdown
        align={{ lg: "end" }}
        className="sc-menudropdown sc-disablefocus"
      >
        <Dropdown.Toggle>
          <div className="position-relative">
            <BsBell className="text-dark h5 pt-1" />
            <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="justify-content-start"
          style={{
            fontSize: "12px",
            paddingLeft: "0.2rem",
            paddingRight: "0.2rem",
          }}
        >
          <Dropdown.Item as={Link} to="/" className="text-wrap lh-sm p-n1">
            Lorem ipsum dolor sit amet, consectetur
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/" className="text-wrap lh-sm p-n1">
            Lorem ipsum dolor sit amet, consectetur
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/" className="text-wrap lh-sm p-n1">
            Lorem ipsum dolor sit amet, consectetur
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        align={{ lg: "end" }}
        className="sc-menudropdown sc-disablefocus"
      >
        <Dropdown.Toggle>
          <img
            src={user.profilePicture && user.profilePicture.url}
            alt={user && user.name}
            width="30"
            height="30"
            className="rounded-circle"
          />
          <BsChevronDown className="text-dark fw-bolder" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="justify-content-start">
          <Row className="mb-3">
            <Col sm={2}>
              <img
                src={user.profilePicture && user.profilePicture.url}
                alt={user && user.name}
                width="30"
                height="30"
                className="rounded-circle"
              />
            </Col>
            <Col sm={10}>
              <span className="fw-bold d-flex" style={{ fontSize: "14px" }}>
                {user && user.name}
              </span>
              <span className="d-flex" style={{ fontSize: "10px" }}>
                {user && user.email}
              </span>
            </Col>
          </Row>
          <Dropdown.Item as={Link} to="/me" className="justify-content-around">
            Profile Settings
          </Dropdown.Item>
          {user && user.role === "admin" && (
            <Dropdown.Item as={Link} to="/dashboard">
              Dashboard
            </Dropdown.Item>
          )}
          <Dropdown.Item as={Link} to="/discover">
            Discover <BsArrowUpRight />
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/" onClick={logoutHandler}>
            Log out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );
};

export default LoggedIn;
