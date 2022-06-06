import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HeroAppreciationLink = ({ hero }) => {
  return (
    <Fragment>
      <Link
        to={`/appreciation/${hero._id}`}
        className="text-decoration-none text-dark"
      >
        {hero.summary}
      </Link>
    </Fragment>
  );
};

export default HeroAppreciationLink;
