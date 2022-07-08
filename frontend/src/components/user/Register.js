import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import ErrorBoundary from "../../ErrorBoundary";

import Google from "../../images/google.svg";
import Linkedin from "../../images/linkedin.svg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userAction";

import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;

  const [profilePicture, setProfilePicture] = useState("");
  const [profilePicturePreview, setProfilePicturePreview] = useState(
    "https://res.cloudinary.com/dja7mdaul/image/upload/v1655345210/social-coin/user_avatar/defaultProfile_ouwetk.jpg"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("confirmPassword", confirmPassword);
    formData.set("profilePicture", profilePicture);

    dispatch(register(formData));
  };

  const onChange = (e) => {
    if (e.target.name === "profilePicture") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfilePicturePreview(reader.result);
          setProfilePicture(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <ErrorBoundary>
            <MetaData title={"Signup/Register"} />
            <Container>
              <Row className="justify-content-center">
                <Col xs={6} md={4} className="mb-5">
                  <h2 className="pw-bolder text-center">sign up</h2>
                  <div className="mt-5 sc-logincontrol">
                    <Form
                      onSubmit={submitHandler}
                      encType="multipart/form-data"
                    >
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="fullname_field">
                          full name
                        </Form.Label>
                        <Form.Control
                          type="name"
                          className="sc-disablefocus rounded-pill border-dark"
                          name="name"
                          value={name}
                          onChange={onChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="email_field">
                          email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          className="sc-disablefocus rounded-pill border-dark"
                          name="email"
                          value={email}
                          onChange={onChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="password_field">
                          password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          className="sc-disablefocus rounded-pill border-dark"
                          name="password"
                          value={password}
                          onChange={onChange}
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
                          onChange={onChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="profilePicture_field">
                          profile picture
                        </Form.Label>
                        <Row>
                          <Col sm="2">
                            <figure className="figure">
                              <img
                                src={profilePicturePreview}
                                className="figure-img img-fluid rounded-circle"
                                alt="profile preview"
                                style={{ width: 30, height: 30 }}
                              />
                            </figure>
                          </Col>
                          <Col sm="10">
                            <Form.Control
                              type="file"
                              className="sc-disablefocus rounded-pill border-dark"
                              accept="images/*"
                              name="profilePicture"
                              onChange={onChange}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label={`confirm that you accept our terms of uses, privacy policy and cookies policy`}
                          style={{ fontSize: "11px" }}
                        />
                      </Form.Group>
                      <div className="d-grid gap-2">
                        <Button
                          type="submit"
                          className="rounded-pill btn-dark btn-outline-light border-dark"
                          disabled={loading ? true : false}
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

export default Register;
