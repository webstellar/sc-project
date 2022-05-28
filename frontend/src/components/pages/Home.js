import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { Container, Row, Spinner } from "react-bootstrap";
import Hero from "../heroes/hero/Hero";

import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../../actions/heroActions";

const Home = () => {
  const dispatch = useDispatch();

  //const { appreciations } = useSelector((state) => state.appreciations);

  const { loading, heroes, error, heroesCount } = useSelector(
    (state) => state.heroes
  );

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Fragment>
          <Container className="text-center">
            <Spinner animation="grow" size="sm" role="status" />
            <Spinner animation="grow" size="sm" role="status" />
            <Spinner animation="grow" size="sm" role="status" />
          </Container>
        </Fragment>
      ) : (
        <Fragment>
          <MetaData title={"Hero appreciation app"} />
          <Container>
            <Row md={4}>
              {heroes &&
                heroes.map((hero) => <Hero key={hero._id} hero={hero} />)}
            </Row>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};
export default Home;
