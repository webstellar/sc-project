import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { Container, Row } from "react-bootstrap";
import Hero from "../heroes/hero/Hero";
import Loader from "../layout/Loader";
import ErrorBoundary from "../../ErrorBoundary";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../../actions/heroActions";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const params = useParams();

  //const { appreciations } = useSelector((state) => state.appreciations);

  const { loading, heroes, error, heroesCount } = useSelector(
    (state) => state.heroes
  );

  //const keyword = params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getHeroes());
  }, [dispatch, alert, error]);

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
