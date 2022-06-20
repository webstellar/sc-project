import React, { useState, useEffect, Fragment } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import MetaData from "../layout/MetaData";
import AdminSideBar from "./AdminSideBar";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newHero, clearErrors } from "../../actions/heroActions";

const NewAdminHero = () => {
  return <div>NewAdminHero</div>;
};

export default NewAdminHero;
