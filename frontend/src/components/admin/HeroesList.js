import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import { Button, Container, Row, Col } from "react-bootstrap";
import { BsPencil, BsTrash } from "react-icons/bs";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import AdminSideBar from "./AdminSideBar";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdminHeroes,
  deleteHero,
  clearErrors,
} from "../../actions/heroActions";

const HeroesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, heroes } = useSelector((state) => state.heroes);

  useEffect(() => {
    dispatch(getAdminHeroes());

    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const setHeroes = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Gender",
          field: "gender",
          sort: "asc",
        },
        {
          label: "Country",
          field: "country",
          sort: "asc",
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
        },
        {
          label: "No of Appreciation",
          field: "appreciationsCount",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],

      rows: [],
    };

    heroes.forEach((hero) => {
      data.rows.push({
        id: hero._id,
        name: hero.name,
        gender: hero.gender,
        country: hero.country,
        email: hero.email,
        appreciationsCount: hero.appreciations.length,
        actions: (
          <Fragment>
            <Link
              to={`/admin/product/${hero._id}`}
              className="btn btn-Primary py-1 px-2"
            >
              <BsPencil />
            </Link>
            <Button
              className="rounded-pill btn-danger py-1 px-2 ml-2"
              onClick={deleteHeroHandler(hero._id)}
            >
              <BsTrash />
            </Button>
          </Fragment>
        ),
      });
    });
  };

  const deleteHeroHandler = (id) => {
    dispatch(deleteHero(id));
  };

  return (
    <Fragment>
      <MetaData title={"All Heroes"} />
      <Container>
        <Row md={2}>
          <Col xs={4} md={2}>
            <AdminSideBar />
          </Col>
          <Col xs={12} md={8}>
            <Fragment>
              <h1 className="my-5">All Heroes</h1>
              {loading ? (
                <Loader />
              ) : (
                <MDBDataTable
                  data={setHeroes()}
                  className="px-3"
                  bordered
                  striped
                  hover
                />
              )}
            </Fragment>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HeroesList;
