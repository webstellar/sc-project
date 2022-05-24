import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaYoutubeSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import "./layout.css";


const FooterNav = () => {
  return (
    <div className="footer-div mt-5">
      <Navbar>
        <Container className="footer-divider">
          <Navbar.Brand as={Link} to="/">
            <img
              src={require("../../images/socialcoin.png")}
              alt="Logo"
              style={{ width: 200, height: 63 }}
            />
          </Navbar.Brand>
          <Navbar.Text className="footer-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Navbar.Text>
          <Nav className="footer-icon justify-content-end">
            <Nav.Link as={Link} to="/">
              <FaYoutubeSquare />
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <FaTwitterSquare />
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <FaInstagramSquare />
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <FaFacebookSquare />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Link as={Link} to="/">
              {" "}
              discover
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              {" "}
              our story
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              {" "}
              blog
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/faqs">
              {" "}
              FAQs
            </Nav.Link>
            <Nav.Link as={Link} to="/help-center">
              {" "}
              help center
            </Nav.Link>
            <Nav.Link as={Link} to="/donate">
              {" "}
              donate
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us">
              {" "}
              contact us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar>
        <Container fluid="md">
          <Nav className="justify-content-end">
            <Nav.Link className="footer-para mb-3">
              Copyright 2022 - Social coin
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default FooterNav;
