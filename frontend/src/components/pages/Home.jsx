import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
import { getAppreciations } from "../../actions/appreciationActions";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, appreciations, error, appreciationsCount } = useSelector(
    (state) => state.appreciations
  );

  /* const { loading, heroes, error, heroesCount } = useSelector(
    (state) => state.heroes
  ); */

  useEffect(() => {
    dispatch(getAppreciations());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title={"Appreciation App"} />

      
    </Fragment>
  );
};
export default Home;
