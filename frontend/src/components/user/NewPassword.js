import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../layout/MetaData";
import ErrorBoundary from "../../ErrorBoundary";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearErrors } from "../../actions/userAction";
import { ToastContainer, toast } from "react-toastify";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { error, success } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Password updated successfully");
      navigate("/login");
    }
  }, [dispatch, error, success, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("password", password);
    formData.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(params.token, formData));
  };

  return (
    <Fragment>
      <ErrorBoundary>
        <MetaData title={"Signup/Register"} />
        <Container>
          <Row className="justify-content-center">
            <Col xs={6} md={4} className="mb-5">
              <h2 className="pw-bolder text-center">new password</h2>
              <div className="mt-5 sc-logincontrol">
                <Form onSubmit={submitHandler} encType="multipart/form-data">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="password_field">password</Form.Label>
                    <Form.Control
                      type="password"
                      className="sc-disablefocus rounded-pill border-dark"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="password_field">
                      confirm password
                    </Form.Label>
                    <Form.Control
                      type="Password"
                      className="sc-disablefocus rounded-pill border-dark"
                      name="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      type="submit"
                      className="rounded-pill btn-dark btn-outline-light border-dark"
                    >
                      reset password
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Container>
      </ErrorBoundary>
    </Fragment>
  );
};

export default NewPassword;
