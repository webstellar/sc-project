import React, { Fragment, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  CardGroup,
  Card,
} from "react-bootstrap";
import MetaData from "../../layout/MetaData";
import ErrorBoundary from "../../../ErrorBoundary";

import { Link, useParams } from "react-router-dom";
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
                <Col sm={8}>
                  <h1 className="fw-bold mb-lg-5">{hero.name}</h1>
                  <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-lg-5"
                  >
                    <Tab eventKey="home" title="Home">
                      <Row>
                        <p>Jan 25, 2022</p>
                        <CardGroup>
                          <Card className="no-border">
                            <Card.Title className="fw-bold">
                              Erica saved myself, I was going down the hill
                            </Card.Title>
                            <Card.Text className="mb-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Sapien eget mi proin sed
                              libero enim sed. At in tellus integer feugiat
                              scelerisque varius.
                            </Card.Text>
                            <Card.Link as={Link} to={"/hero"}>
                              Read More
                            </Card.Link>
                          </Card>
                          <Card>
                              
                          </Card>
                        </CardGroup>
                      </Row>
                    </Tab>
                    <Tab eventKey="about" title="About"></Tab>
                  </Tabs>
                </Col>
                <Col sm={4}></Col>
              </Row>
            </Container>
          </ErrorBoundary>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HeroDetails;
