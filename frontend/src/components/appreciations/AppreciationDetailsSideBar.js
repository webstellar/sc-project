import React, { useEffect, Fragment } from "react";
import SearchBar from "../layout/SearchBar";
import { ReactComponent as Envelope } from "../../images/envelope-plus.svg";
import HeroAppreciationLink from "../heroes/hero/HeroAppreciationLink";

import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../../actions/heroActions";

const AppreciationDetailsSideBar = () => {
  const dispatch = useDispatch();

  const { loading, heroes, error } = useSelector((state) => state.heroes);

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  return (
    <Fragment>
      <SearchBar />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="mb-4">
            {heroes.appreciations &&
              heroes.appreciations.map((hero) => (
                <HeroAppreciationLink key={hero._id} hero={hero} />
              ))}
          </div>
        </Fragment>
      )}
      <div>
        <button type="button" className="btn btn-dark rounded-pill px-3 me-3">
          APPRECIATE
        </button>
        <span className="border border-2 border-dark text-dark rounded-circle p-2">
          <Envelope />
        </span>
      </div>
    </Fragment>
  );
};

export default AppreciationDetailsSideBar;
