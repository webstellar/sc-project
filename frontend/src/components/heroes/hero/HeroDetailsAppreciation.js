import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Appreciation = ({ appreciation }) => {
  return (
    <Fragment>
      <Row className="mb-lg-5">
        <p>Jan 25, 2022</p>
        <div className="mb-3">
          <div className="d-flex position-relative align-content-around">
            <div className="me-lg-5">
              <h5 className="mt-0 fw-bold">{appreciation.summary}</h5>
              <p>{appreciation.story}</p>
              <Link to={`/appreciation/${appreciation._id}`}>Read More</Link>
            </div>
            <div className="justify-content-end">
              <img
                src={appreciation.image}
                className="flex-shrink-0 mb-2"
                alt={`${appreciation.name}'s appreciator `}
              />
              <p className="text-end">{"UserID here"}</p>
            </div>
          </div>
        </div>
        <hr />
      </Row>
    </Fragment>
  );
};

export default Appreciation;
