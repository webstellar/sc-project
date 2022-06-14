import React, { Fragment } from "react";
import SearchBar from "../layout/SearchBar";
import { ReactComponent as Envelope } from "../../images/envelope-plus.svg";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AppreciationDetailsSideBarsTop = ({ hero }) => {
  console.log({ hero });
  return (
    <Fragment>
      <SearchBar />
      <img
        src={hero.hero.profilePicture.url}
        alt="mdo"
        width="150"
        height="150"
        className="rounded-circle mb-3"
      />
      <h5 className="mt-0 fw-bold">{hero.hero.name}</h5>
      <span className="mt-1 fw-bold pe-1">{hero.hero.appreciationsCount}</span>
      {hero.hero.appreciationsCount > 0 ? (
        <span className="mt-1 fw-bold">Appreciations</span>
      ) : (
        <span className="mt-1 fw-bold">Appreciation</span>
      )}
      <p className="mt-1 mb-4">{hero.hero.description}</p>

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

export default AppreciationDetailsSideBarsTop;
