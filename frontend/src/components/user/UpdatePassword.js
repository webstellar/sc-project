import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import ErrorBoundary from "../../ErrorBoundary";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, clearErrors } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstant";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isUpdated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Password updated successfully");

      navigate("/me");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, navigate, isUpdated]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("oldPassword", oldPassword);
    formData.set("password", password);

    dispatch(updatePassword(formData));
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <ErrorBoundary>
            <MetaData title={"Update Password"} />
            <Container>
              <Row className="justify-content-center">
                <Col xs={6} md={4} className="mb-5">
                  <h2 className="pw-bolder text-center">update password</h2>
                  <div className="mt-5 sc-logincontrol">
                    <Form onSubmit={submitHandler}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="password_field">
                          old password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          className="sc-disablefocus rounded-pill border-dark"
                          value={oldPassword}
                          onChange={(e) => {
                            setOldPassword(e.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="confirm_password_field">
                          new password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          className="sc-disablefocus rounded-pill border-dark"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </Form.Group>
                      <div classNam="d-grid gap-2">
                        <Button
                          type="submit"
                          className="rounded-pill btn-dark btn-outline-light border-dark mb-3"
                        >
                          update password
                        </Button>
                      </div>
                    </Form>
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

export default UpdatePassword;
