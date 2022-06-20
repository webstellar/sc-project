import React, { useState, useEffect, Fragment } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import MetaData from "../layout/MetaData";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newHero, clearErrors } from "../../actions/heroActions";

const NewUserHero = () => {
  return <div>NewUserHero</div>;
};

export default NewUserHero;
