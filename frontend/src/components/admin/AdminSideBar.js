import React, { Fragment } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <Fragment>
      <Nav defaultActiveKey="/home" className="flex-column">
        <NavDropdown
          title="Appreciations"
          id="nav-dropdown"
          className="sc-adminsidebar"
        >
          <NavDropdown.Item as={Link} to="/admin/appreciations">
            All Appreciations
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/admin/appreciation">
            Add New Appreciation
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Heroes"
          id="nav-dropdown"
          className="sc-adminsidebar"
        >
          <NavDropdown.Item as={Link} to="/admin/heroes">
            All Heroes
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/admin/hero">
            Add New Hero
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Users"
          id="nav-dropdown"
          className="sc-adminsidebar"
        >
          <NavDropdown.Item as={Link} to="/admin/users">
            All Users
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/admin/user">
            Add New User
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Comments"
          id="nav-dropdown"
          className="sc-adminsidebar"
        >
          <NavDropdown.Item as={Link} to="/admin/comments">
            All Comments
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/admin/comment">
            Add Comment
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Fragment>
  );
};

export default AdminSideBar;
