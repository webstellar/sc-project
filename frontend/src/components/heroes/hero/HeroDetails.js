import React, { Fragment, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import MetaData from "../../layout/MetaData";
import ErrorBoundary from "../../../ErrorBoundary";
import Appreciation from "./HeroDetailsAppreciation";
import HeroDetailsSideBar from "./HeroDetailsSideBar";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHeroDetails, clearErrors } from "../../../actions/heroActions";
import Loader from "../../layout/Loader";

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
                      {hero.appreciations ? (
                        <Fragment>
                          {hero.appreciations.map((appreciation, i) => (
                            <Appreciation hero={appreciation} />
                          ))}
                        </Fragment>
                      ) : (
                        <Loader />
                      )}
                    </Tab>
                    <Tab eventKey="about" title="About"></Tab>
                  </Tabs>
                </Col>
                <Col sm={4} className="ps-5">
                  <HeroDetailsSideBar hero={hero} />
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
