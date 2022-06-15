import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import ErrorBoundary from "../../ErrorBoundary";

import Google from "../../images/google.svg";
import Linkedin from "../../images/linkedin.svg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useAlert } from "react-alert";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userAction";

const Signup = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const params = useParams();
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <ErrorBoundary>
            <MetaData title={"Signup/Login"} />
            <Container>
              <Row className="justify-content-center">
                <Col xs={6} md={4} className="mb-5">
                  <h2 className="pw-bolder text-center">sign up</h2>
                  <div className="mt-5 sc-logincontrol">
                    <Form onSubmit={submitHandler}>
                      <Form.Group className="mb-3">
                        <Form.Label>username</Form.Label>
                        <Form.Control
                          type="text"
                          className="sc-disablefocus rounded-pill border-dark"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>email address</Form.Label>
                        <Form.Control
                          type="email"
                          className="sc-disablefocus rounded-pill border-dark"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>password</Form.Label>
                        <Form.Control
                          type="password"
                          className="sc-disablefocus rounded-pill border-dark"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>confirm password</Form.Label>
                        <Form.Control
                          type="password"
                          className="sc-disablefocus rounded-pill border-dark"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label={`confirm that you accept our terms of uses, privacy policy and cookies policy`}
                          style={{ fontSize: "11px" }}
                        />
                      </Form.Group>
                      <div class="d-grid gap-2">
                        <Button
                          type="submit"
                          className="rounded-pill btn-dark btn-outline-light border-dark"
                        >
                          sign up
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-5 mb-5">
                      <hr />
                    </div>

                    <div class="d-grid gap-2 mb-3">
                      <Button className="sc-disablefocus rounded-pill btn-labeled btn-light btn-outline-dark">
                        <img
                          src={Google}
                          alt="linkedin icon"
                          style={{ width: 18, height: 18 }}
                          className="pe-1"
                        />
                        sign up with Google
                      </Button>
                    </div>
                    <div class="d-grid gap-2 mb-3">
                      <Button className="sc-disablefocus rounded-pill btn-labeled btn-light btn-outline-dark">
                        <img
                          src={Linkedin}
                          alt="linkedin icon"
                          style={{ width: 18, height: 18 }}
                          className="pe-1"
                        />
                        sign up with LinkedIn
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </ErrorBoundary>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Signup;
