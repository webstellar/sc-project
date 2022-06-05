import React, { Fragment, useEffect } from "react";
import { Container, Row, Col, Navbar, Image } from "react-bootstrap";
import ErrorBoundary from "../../ErrorBoundary";
import Loader from "../layout/Loader";
import MetaData from "../../components/layout/MetaData";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Banner from "../../images/banner-test.jpg";
import HeroDetailsSideBar from "../heroes/hero/HeroDetailsSideBar";
import AppreciationDetailsSideBar from "../appreciations/AppreciationDetailsSideBar";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppreciationDetails,
  clearErrors,
} from "../../actions/appreciationActions";
import { getHeroDetails } from "../../actions/heroActions";

const AppreciationDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, error, appreciation } = useSelector(
    (state) => state.appreciationDetails
  );

  const { hero } = useSelector((state) => state.heroDetails);

  useEffect(() => {
    dispatch(getAppreciationDetails(id));
    dispatch(getHeroDetails(id));

    if (error) {
      //alert.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"appreciation"} />
          <Container>
            <ErrorBoundary>
              <Row>
                <Col sm={8} className="hero-details-col pe-5">
                  <Navbar className="justify-content-start mb-5">
                    <Navbar.Brand href="#home">
                      <img
                        src="https://github.com/mdo.png"
                        alt="mdo"
                        width="50"
                        height="50"
                        className="rounded-circle"
                      />
                    </Navbar.Brand>
                    <Navbar.Brand>
                      <span className="fw-bold" style={{ fontSize: "18px" }}>
                        {"Appreciator"}
                      </span>
                      <span className="d-flex" style={{ fontSize: "12px" }}>
                        {"Jan 20"}
                      </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end sc-appreciation-icon">
                      <div className="col-3 d-flex flex-row justify-content-between">
                        <FaLinkedin />
                        <FaTwitter />
                        <FaInstagram />
                        <FaFacebook />
                        <BsThreeDots />
                      </div>
                    </Navbar.Collapse>
                  </Navbar>
                  <div>
                    <h1 className="fw-bolder fs-4 mb-4">
                      {appreciation.summary}
                    </h1>
                    <div className="mb-4">
                      {!appreciation.image ? (
                        <Image
                          src={`${appreciation.image}`}
                          style={{ width: "800px", height: "500px" }}
                        />
                      ) : (
                        <Image
                          src={Banner}
                          style={{ width: "800px", height: "500px" }}
                        />
                      )}
                    </div>
                    <p>{appreciation.story}</p>
                  </div>
                </Col>
                <Col sm={4} className="ps-5">
                  <HeroDetailsSideBar hero={hero} />
                </Col>
              </Row>
            </ErrorBoundary>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AppreciationDetails;
