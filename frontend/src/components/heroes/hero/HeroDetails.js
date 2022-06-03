import React, { Fragment, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { GrSearch } from "react-icons/gr";
import MetaData from "../../layout/MetaData";
import ErrorBoundary from "../../../ErrorBoundary";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHeroDetails, clearErrors } from "../../../actions/heroActions";
import Loader from "../../layout/Loader";
import { ReactComponent as Envelope } from "../../../images/envelope-plus.svg";

const HeroDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, error, hero } = useSelector((state) => state.heroDetails);

  useEffect(() => {
    dispatch(getHeroDetails(id));

    if (error) {
      //alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Hero appreciation"} />
          <ErrorBoundary>
            <Container>
              <Row>
                <Col sm={8} className="hero-details-col pe-5">
                  <h1 className="fw-bold mb-lg-5">{hero.name}</h1>
                  <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-lg-5"
                  >
                    <Tab eventKey="home" title="Home">
                      <Row>
                        <p>Jan 25, 2022</p>

                        <div className="d-flex position-relative">
                          <div className="me-lg-5 align-content-around">
                            <h5 className="mt-0 fw-bold">
                              Custom component with stretched link
                            </h5>
                            <p>
                              This is some placeholder content for the custom
                              component. It is intended to mimic what some
                              real-world content would look like, and we're
                              using it here to give the component a bit of body
                              and size.
                            </p>
                            <a href="/" className="stretched-link">
                              Go somewhere
                            </a>
                          </div>
                          <div className="justify-content-end mb-3">
                            <img
                              src="https://via.placeholder.com/150"
                              className="flex-shrink-0 mb-2"
                              alt="..."
                            />
                            <p className="text-end">Raymond Ileso</p>
                          </div>
                        </div>
                        <hr />
                      </Row>
                    </Tab>
                    <Tab eventKey="about" title="About"></Tab>
                  </Tabs>
                </Col>
                <Col sm={4} className="ps-5">
                  <form action="" className="mb-lg-5">
                    <div className="input-group mb-4 border rounded-pill p-1">
                      <div className="input-group-prepend border-0">
                        <button
                          id="button-addon4"
                          type="button"
                          className="btn btn-link text-info"
                        >
                          <GrSearch />
                        </button>
                      </div>
                      <input
                        type="search"
                        placeholder="What're you searching for?"
                        aria-describedby="button-addon4"
                        className="form-control bg-none border-0"
                      />
                    </div>
                  </form>
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="150"
                    height="150"
                    className="rounded-circle mb-3"
                  />
                  <h5 className="mt-0 fw-bold">{hero.name}</h5>
                  <span className="mt-1 fw-bold pe-1">
                    {hero.appreciationsCount}
                  </span>
                  {hero.appreciationsCount > 0 ? (
                    <span className="mt-1 fw-bold">Appreciations</span>
                  ) : (
                    <span className="mt-1 fw-bold">Appreciation</span>
                  )}
                  <p className="mt-1 mb-4">{hero.description}</p>
                  <button
                    type="button"
                    className="btn btn-dark rounded-pill px-3 me-3"
                  >
                    APPRECIATE
                  </button>
                  <span className="border border-3 rounded-circle p-2">
                    <Envelope />
                  </span>
                </Col>
              </Row>
            </Container>
          </ErrorBoundary>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HeroDetails;
