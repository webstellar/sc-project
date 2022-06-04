import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Appreciation = ({ hero }) => {
  return (
    <Fragment>
      <Row className="mb-lg-5">
        <p>Jan 25, 2022</p>
        <div className="mb-3">
          <div className="d-flex position-relative align-content-around">
            <div className="me-lg-5">
              <h5 className="mt-0 fw-bold">{hero.summary}</h5>
              <p>{hero.story}</p>
              <a href="/" className="stretched-link">
                READ MORE
              </a>
            </div>
            <div className="justify-content-end">
              <img src={hero.image} className="flex-shrink-0 mb-2" alt="..." />
              <p className="text-end">{""} Raymond Ileso</p>
            </div>
          </div>
        </div>
        <hr />
      </Row>
    </Fragment>
  );
};

export default Appreciation;
