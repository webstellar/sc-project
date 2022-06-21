import React, { useState, useEffect, Fragment, useMemo } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import countryList from "react-select-country-list";
import ErrorBoundary from "../../ErrorBoundary";

import MetaData from "../layout/MetaData";
import AdminSideBar from "./AdminSideBar";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newHero, clearErrors } from "../../actions/heroActions";
import { NEW_HERO_RESET } from "../../constants/heroConstant";
import { toast } from "react-toastify";

const NewAdminHero = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [profilePicturePreview, setProfileturePreview] = useState(
    "https://res.cloudinary.com/dja7mdaul/image/upload/v1655345210/social-coin/user_avatar/defaultProfile_ouwetk.jpg"
  );

  const genders = ["Male", "Female", "Others"];
  const countries = useMemo(() => countryList().getData(), []);

  const alert = toast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newHero);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      navigate("/admin/heroes");
      alert.success("Hero created successfully");
      dispatch({ type: NEW_HERO_RESET });
    }
  }, [dispatch, alert, error, success, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("description", description);
    formData.set("gender", gender);
    formData.set("country", country);
    formData.set("email", email);
    formData.set("linkedinUrl", linkedinUrl);
    formData.set("twitterUrl", twitterUrl);
    formData.set("instagramUrl", instagramUrl);
    formData.set("facebookUrl", facebookUrl);
    formData.set("profilePicture", profilePicture);

    dispatch(newHero(formData));
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
    }
  };

  return (
    <Fragment>
      <MetaData title={"All Heroes"} />
      <Container>
        <Row>
          <Col xs={4} md={2}>
            <AdminSideBar />
          </Col>
          <Col>
            <Fragment>
              <h1 className="my-5">All Heroes</h1>
              {loading ? (
                <Loader />
              ) : (
                <Fragment>
                  <ErrorBoundary>
                    <MetaData title={"Create New Hero"} />
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
                                  onChange={(e) => {
                                    setName(e.target.ariaValueMax);
                                  }}
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
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label htmlFor="description_field">
                                  description
                                </Form.Label>
                                <Form.Control
                                  type=""
                                  className="sc-disablefocus rounded-pill border-dark"
                                  name="password"
                                  value={description}
                                  onChange={(e) => {
                                    setDescription(e.target.value);
                                  }}
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label htmlFor="gender_option">
                                  gender
                                </Form.Label>
                                <Form.Select
                                  value={gender}
                                  onChange={(e) => setGender(e.target.value)}
                                >
                                  {genders.map((gender) => (
                                    <option key={gender} value={gender}>
                                      {gender}
                                    </option>
                                  ))}
                                </Form.Select>
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label htmlFor="country_option">
                                  country
                                </Form.Label>
                                <Form.Select
                                  value={country}
                                  onChange={(e) => setCountry(e.target.value)}
                                >
                                  <option>{countries}</option>
                                </Form.Select>
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label htmlFor="linkedinUrl_field">
                                  linkedin Url
                                </Form.Label>
                                <Form.Control
                                  type="url"
                                  className="sc-disablefocus rounded-pill border-dark"
                                  name="url"
                                  value={linkedinUrl}
                                  onChange={(e) => {
                                    setLinkedinUrl(e.target.value);
                                  }}
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label htmlFor="instagramUrl_field">
                                  instagram Url
                                </Form.Label>
                                <Form.Control
                                  type="url"
                                  className="sc-disablefocus rounded-pill border-dark"
                                  name="url"
                                  value={instagramUrl}
                                  onChange={(e) => {
                                    setInstagramUrl(e.target.value);
                                  }}
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label htmlFor="twitterUrl_field">
                                  twitter Url
                                </Form.Label>
                                <Form.Control
                                  type="url"
                                  className="sc-disablefocus rounded-pill border-dark"
                                  name="url"
                                  value={twitterUrl}
                                  onChange={(e) => {
                                    setTwitterUrl(e.target.value);
                                  }}
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label htmlFor="facbeookUrl_field">
                                  facebook Url
                                </Form.Label>
                                <Form.Control
                                  type="url"
                                  className="sc-disablefocus rounded-pill border-dark"
                                  name="url"
                                  value={facebookUrl}
                                  onChange={(e) => {
                                    setFacebookUrl(e.target.value);
                                  }}
                                />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label htmlFor="profilePicture_field">
                                  profile picture
                                </Form.Label>
                                <Row>
                                  <Col sm="2">
                                    <figure class="figure">
                                      <img
                                        src={profilePicturePreview}
                                        class="figure-img img-fluid rounded-circle"
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
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </ErrorBoundary>
                </Fragment>
              )}
            </Fragment>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default NewAdminHero;
