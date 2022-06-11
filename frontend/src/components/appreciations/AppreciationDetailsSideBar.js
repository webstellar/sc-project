import React, { useEffect, Fragment } from "react";
import SearchBar from "../layout/SearchBar";
import { ReactComponent as Envelope } from "../../images/envelope-plus.svg";
import HeroAppreciationLink from "../heroes/hero/HeroAppreciationLink";
import { ListGroup } from "react-bootstrap";
import { GoPrimitiveDot } from "react-icons/go";
import Loader from "../layout/Loader";

import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../../actions/heroActions";

const AppreciationDetailsSideBar = () => {
  const dispatch = useDispatch();

  const { loading, heroes, error } = useSelector((state) => state.heroes);

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch, error]);

  return (
    <Fragment>
      <Routes>
        <Route render={({ history }) => <SearchBar history={history} />} />
      </Routes>

      <div>
        <button type="button" className="btn btn-dark rounded-pill px-3 me-3">
          APPRECIATE
        </button>
        <span className="border border-2 border-dark text-dark rounded-circle p-2">
          <Envelope />
        </span>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <ListGroup variant="flush" className="mb-4 mt-4">
            <span>
              <span
                style={heroes ? { color: "#4CAF50" } : { color: "#FF5252" }}
              >
                <GoPrimitiveDot />
              </span>
              See Who Got Appreciated Today
            </span>
            {heroes &&
              heroes.map((heroes, i) => (
                <HeroAppreciationLink
                  key={i}
                  heroes={heroes}
                ></HeroAppreciationLink>
              ))}
          </ListGroup>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AppreciationDetailsSideBar;
