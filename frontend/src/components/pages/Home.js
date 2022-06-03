import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { Container, Row } from "react-bootstrap";
import Hero from "../heroes/hero/Hero";
import Loader from "../layout/Loader";
import ErrorBoundary from "../../ErrorBoundary";

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
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Hero appreciation app"} />
          <Container>
            <Row md={4}>
              <ErrorBoundary>
                {heroes &&
                  heroes.map((hero) => <Hero key={hero._id} hero={hero} />)}
              </ErrorBoundary>
            </Row>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};
export default Home;
