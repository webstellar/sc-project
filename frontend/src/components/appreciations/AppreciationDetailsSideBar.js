import React, { Fragment } from "react";
import SearchBar from "../layout/SearchBar";
import { ReactComponent as Envelope } from "../../images/envelope-plus.svg";

const AppreciationDetailsSideBar = (appreciation) => {
  //Unable to connect to Appreciation Hero
  //Solution pending
  return (
    <Fragment>
      <SearchBar />
      <img
        src="https://github.com/mdo.png"
        alt="mdo"
        width="150"
        height="150"
        className="rounded-circle mb-3"
      />
      <h5 className="mt-0 fw-bold">{appreciation.hero}</h5>
      <span className="mt-1 fw-bold pe-1">{appreciation.hero}</span>
      {appreciation.hero > 0 ? (
        <span className="mt-1 fw-bold">Appreciations</span>
      ) : (
        <span className="mt-1 fw-bold">Appreciation</span>
      )}
      <p className="mt-1 mb-4">{appreciation.hero}</p>
      <button type="button" className="btn btn-dark rounded-pill px-3 me-3">
        APPRECIATE
      </button>
      <span className="border border-2 border-dark text-dark rounded-circle p-2">
        <Envelope />
      </span>
    </Fragment>
  );
};

export default AppreciationDetailsSideBar;
