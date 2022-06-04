import React from "react";

const HeroDetailsAbout = ({ hero }) => {
  return (
    <div>
      <h6>{hero.name}</h6>
      <p>{hero.description}</p>
      <p>{hero.gender}</p>
    </div>
  );
};

export default HeroDetailsAbout;
