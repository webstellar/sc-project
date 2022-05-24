import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { Card, Container, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getAppreciations } from "../../actions/appreciationActions";
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
                  style={{ width: "15rem" }}
                >
                  <Card.Img
                    style={{ width: "15rem", height: "20rem" }}
                    src={hero.profilePicture.url}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>{hero.name}</Card.Title>
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
