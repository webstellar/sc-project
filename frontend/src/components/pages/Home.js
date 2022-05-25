import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { Card, Container, Row, Col } from "react-bootstrap";
import { MdMessage } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../../actions/heroActions";

const Home = () => {
  const dispatch = useDispatch();

  /* const { loading, appreciations, error, appreciationsCount } = useSelector(
    (state) => state.appreciations
  ); */

  const { loading, heroes, error, heroesCount } = useSelector(
    (state) => state.heroes
  );

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  return (
    <>
      <MetaData title={"Hero appreciation app"} />
      <Container>
        <Row md={4}>
          {heroes &&
            heroes.map((hero) => (
              <Col>
                <Card
                  key={hero._id}
                  className="bg-dark text-white"
                  style={{ width: "15rem", borderRadius: "10px" }}
                >
                  <Card.Img
                    style={{ width: "15rem", height: "20rem" }}
                    src={hero.profilePicture.url}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Body>
                      <Row className="d-flex justify-content-end">
                        <Col sm={3} className="hero-count">
                          <span>
                            <MdMessage />
                          </span>
                          <span className="ps-1">{hero.apprecationsCount}</span>
                        </Col>
                      </Row>
                    </Card.Body>

                    <Card.Title>{hero.appreciations.summary}</Card.Title>
                    <Card.Text>{hero.description}</Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
export default Home;
