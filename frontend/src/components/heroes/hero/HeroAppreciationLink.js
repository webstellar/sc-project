import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Navbar } from "react-bootstrap";

const HeroAppreciationLink = ({ heroes }) => {
  const appreciations = heroes.appreciations;
  let appr = appreciations[appreciations.length - 1];

  return (
    <Fragment>
      <ListGroup.Item
        as={Link}
        to={`/appreciation/${appr._id}`}
        className="sc-sidedarlink mb-1"
      >
        <Navbar className="justify-content-start">
          <Navbar.Brand>
            <img
              src={heroes.profilePicture.url}
              alt="mdo"
              width="24"
              height="24"
              className="rounded-circle me-2"
            />
            <span className="fw-bold" style={{ fontSize: "16px" }}>
              {heroes.name}
            </span>
          </Navbar.Brand>
        </Navbar>
        {appr.summary}
      </ListGroup.Item>
    </Fragment>
  );
};

export default HeroAppreciationLink;
