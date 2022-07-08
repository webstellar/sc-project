import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { Container, Row } from "react-bootstrap";
import Hero from "../heroes/hero/Hero";
import Loader from "../layout/Loader";
import ErrorBoundary from "../../ErrorBoundary";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../../actions/heroActions";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { loading, heroes, error, heroesCount } = useSelector(
    (state) => state.heroes
  );

  const keyword = params.keyword;

  useEffect(() => {
    if (error) {
      return toast.error(error);
    }

    dispatch(getHeroes(keyword));
  }, [dispatch, keyword, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Hero appreciation app"} />
          <Container>
            <Row sm={3} md={6}>
              <ErrorBoundary>
                {heroes &&
                  heroes.map((hero) => <Hero key={hero._id} hero={hero} />)}
              </ErrorBoundary>
            </Row>
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};
export default Home;
