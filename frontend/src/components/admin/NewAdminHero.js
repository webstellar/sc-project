import React, { useState, useEffect, Fragment } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ErrorBoundary from "../../ErrorBoundary";
import data from "../../data.json";

import MetaData from "../layout/MetaData";
import AdminSideBar from "./AdminSideBar";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newHero, clearErrors } from "../../actions/heroActions";
import { NEW_HERO_RESET } from "../../constants/heroConstant";
import { toast, ToastContainer } from "react-toastify";

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
  const [profilePicturePreview, setProfilePicturePreview] = useState(
    "https://res.cloudinary.com/dja7mdaul/image/upload/v1655345210/social-coin/user_avatar/defaultProfile_ouwetk.jpg"
  );

  const genders = ["Male", "Female", "Others"];
  const countries = data;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newHero);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      navigate("/admin/heroes");
      toast.success("Hero created successfully");
      dispatch({ type: NEW_HERO_RESET });
    }
  }, [dispatch, error, success, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("description", description);
    //formData.set("gender", gender);
    //formData.set("country", country);
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
            <ErrorBoundary>
              <h2 className="pw-bolder text-center">sign up</h2>
              <div className="mt-5 sc-logincontrol">
                <Form onSubmit={submitHandler} encType="multipart/form-data">
                  <Form.Group className="mb-3" as={Col}>
                    <Form.Label htmlFor="fullname_field">full name</Form.Label>
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
                  <Form.Group className="mb-3" as={Col}>
                    <Form.Label htmlFor="email_field">email address</Form.Label>
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
                      as="textarea"
                      rows={3}
                      type="text"
                      className="sc-disablefocus rounded border-dark"
                      name="description"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col}>
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
                  <Form.Group className="mb-3" as={Col}>
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
                  <Form.Group className="mb-3" as={Col}>
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
                  <Form.Group className="mb-3" as={Col}>
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
                    <Row className="d-flex align-items-center">
                      <Col sm="2">
                        <figure className="figure">
                          <img
                            src={profilePicturePreview}
                            className="figure-img img-fluid rounded-circle"
                            alt="profile preview"
                            style={{ width: 40, height: 40 }}
                          />
                        </figure>
                      </Col>
                      <Col sm="10">
                        <Form.Control
                          type="file"
                          className="sc-disablefocus align-items-center rounded-pill border-dark"
                          accept="images/*"
                          name="profilePicture"
                          onChange={onChange}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      type="submit"
                      className="rounded-pill btn-dark btn-outline-light border-dark"
                      disabled={loading ? true : false}
                    >
                      publish
                    </Button>
                  </div>
                </Form>
              </div>
            </ErrorBoundary>
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
    </Fragment>
  );
};

export default NewAdminHero;

/*
                  <Form.Group className="mb-3" as={Col}>
                    <Form.Label htmlFor="gender_option">gender</Form.Label>
                    <Form.Select
                      name="gender"
                      className="sc-disablefocus rounded-pill border-dark"
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

                  <Form.Group className="mb-3" as={Col}>
                    <Form.Label htmlFor="gender_option">country</Form.Label>
                    <Form.Select
                      name="country"
                      className="sc-disablefocus rounded-pill border-dark"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
*/
