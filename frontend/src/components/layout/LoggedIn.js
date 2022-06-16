import React, { Fragment } from "react";
import { Nav, Dropdown, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBell, BsChevronDown, BsArrowUpRight } from "react-icons/bs";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../actions/userAction";

const LoggedIn = ({ user }) => {
  //TODO: set State for Notification

  return (
    <Fragment>
      <Nav.Link as={Link} to="/our-story">
        <div className="position-relative">
          <BsBell />
          <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
      </Nav.Link>
      <Dropdown
        align={{ lg: "end" }}
        className="sc-menudropdown sc-disablefocus"
      >
        <Dropdown.Toggle>
          <img
            src={
              "https://res.cloudinary.com/dja7mdaul/image/upload/v1655345210/social-coin/user_avatar/defaultProfile_ouwetk.jpg"
            }
            alt="mdo"
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
                src={
                  "https://res.cloudinary.com/dja7mdaul/image/upload/v1655345210/social-coin/user_avatar/defaultProfile_ouwetk.jpg"
                }
                alt="mdo"
                width="30"
                height="30"
                className="rounded-circle"
              />
            </Col>
            <Col sm={10}>
              <span className="fw-bold d-flex" style={{ fontSize: "14px" }}>
                {"Peter Onyegbule"}
              </span>
              <span className="d-flex" style={{ fontSize: "10px" }}>
                {"pete.onyegbule@gmail.com"}
              </span>
            </Col>
          </Row>
          <Dropdown.Item as={Link} to="/" className="justify-content-around">
            Profile Settings
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/discover">
            Discover <BsArrowUpRight />
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/logout">
            Log out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );
};

export default LoggedIn;
