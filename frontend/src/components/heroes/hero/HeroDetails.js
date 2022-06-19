import React, { Fragment, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab, ListGroup } from "react-bootstrap";
import MetaData from "../../layout/MetaData";
import ErrorBoundary from "../../../ErrorBoundary";
import Appreciation from "./HeroDetailsAppreciation";
import HeroDetailsSideBar from "./HeroDetailsSideBar";
import HeroDetailsAbout from "./HeroDetailsAbout";
import HeroAppreciationLink from "./HeroAppreciationLink";
import Loader from "../../layout/Loader";
import { GoPrimitiveDot } from "react-icons/go";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getHeroDetails,
  getHeroes,
  clearErrors,
} from "../../../actions/heroActions";

const HeroDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { loading, error, hero } = useSelector((state) => state.heroDetails);

  const { heroes } = useSelector((state) => state.heroes);

  useEffect(() => {
    dispatch(getHeroDetails(params.id));
    dispatch(getHeroes());

    if (error) {
      //alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, params.id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Hero appreciation"} />

          <Container>
            <ErrorBoundary>
              <Row>
                <Col sm={8} className="hero-details-col pe-5">
                  <h1 className="fw-bold mb-lg-5">{hero.name}</h1>
                  <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-lg-5"
                  >
                    <Tab eventKey="home" title="Home" className="sc-tab">
                      {hero.appreciations ? (
                        <Fragment>
                          {hero.appreciations.map((appreciation, i) => (
                            <Appreciation key={i} appreciation={appreciation} />
                          ))}
                        </Fragment>
                      ) : (
                        <Loader />
                      )}
                    </Tab>

                    <Tab eventKey="about" title="About">
                      <HeroDetailsAbout hero={hero} />
                    </Tab>
                  </Tabs>
                </Col>

                <Col sm={4} className="ps-5">
                  <HeroDetailsSideBar key={hero._id} hero={hero} />
                  <ListGroup variant="flush" className="mb-4 mt-5">
                    <span>
                      <span
                        style={
                          heroes ? { color: "#4CAF50" } : { color: "#FF5252" }
                        }
                      >
                        <GoPrimitiveDot />
                      </span>
                      See Who Got Appreciated Today
                    </span>
                    {heroes &&
                      heroes.map((heroes, i) => (
                        <HeroAppreciationLink key={i} heroes={heroes} />
                      ))}
                  </ListGroup>
                </Col>
              </Row>
            </ErrorBoundary>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HeroDetails;
