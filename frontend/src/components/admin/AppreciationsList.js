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
  getAdminAppreciations,
  deleteAppreciation,
  clearErrors,
} from "../../actions/appreciationActions";

const AppreciationsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, appreciations } = useSelector(
    (state) => state.appreciations
  );

  useEffect(() => {
    dispatch(getAdminAppreciations());

    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const setAppreciations = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Hero",
          field: "hero",
          sort: "asc",
        },
        {
          label: "Like",
          field: "likeCount",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],

      rows: [],
    };

    appreciations.forEach((appreciation) => {
      data.rows.push({
        id: appreciation._id,
        name: appreciation.name,
        gender: appreciation.gender,
        country: appreciation.country,
        email: appreciation.email,
        appreciationsCount: appreciation.appreciationsCount,
        actions: (
          <Fragment>
            <Link
              to={`/admin/product/${appreciation._id}`}
              className="btn btn-Primary py-1 px-2"
            >
              <BsPencil />
            </Link>
            <Button
              className="rounded-pill btn-danger py-1 px-2 ml-2"
              onClick={deleteAppreciationHandler(appreciation._id)}
            >
              <BsTrash />
            </Button>
          </Fragment>
        ),
      });
    });
  };

  const deleteAppreciationHandler = (id) => {
    dispatch(deleteAppreciation(id));
  };

  return (
    <Fragment>
      <MetaData title={"All Appreciations"} />
      <Container>
        <Row md={2}>
          <Col xs={4} md={2}>
            <AdminSideBar />
          </Col>
          <Col xs={12} md={8}>
            <Fragment>
              <h1 className="my-5">All Appreciations</h1>
              {loading ? (
                <Loader />
              ) : (
                <MDBDataTable
                  data={setAppreciations()}
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

export default AppreciationsList;
