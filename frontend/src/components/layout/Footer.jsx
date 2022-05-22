import React, { Fragment } from "react";
import {
  Logo,
  NavLink,
  NavMenu,
  FooterNav,
  FooterNavMenu,
  FooterParagraph,
  FooterNavLink,
  YoutubeIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from "./NavbarElements";

const Footer = () => {
  return (
    <Fragment>
      <FooterNav>
        <FooterNavLink to="/">
          <Logo src={require("../../images/socialcoin.png")} alt="Logo" />
        </FooterNavLink>
        <FooterParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </FooterParagraph>
        <FooterNavMenu>
          <FooterNavLink to="/">
            <YoutubeIcon />
          </FooterNavLink>
          <FooterNavLink to="/">
            <LinkedInIcon />
          </FooterNavLink>
          <FooterNavLink to="/">
            <TwitterIcon />
          </FooterNavLink>
          <FooterNavLink to="/">
            <InstagramIcon />
          </FooterNavLink>
          <FooterNavLink to="/">
            <FacebookIcon />
          </FooterNavLink>
        </FooterNavMenu>
      </FooterNav>
      <FooterNav>
        <NavLink to="/discover">discover</NavLink>
        <NavLink to="/our-story">our story</NavLink>
        <NavLink to="/blog">blog</NavLink>
        <NavMenu>
          <NavLink to="/faqs">FAQs</NavLink>
          <NavLink to="/help-center">help center</NavLink>
          <NavLink to="/donate">donate</NavLink>
          <NavLink to="/contactus">contact us</NavLink>
        </NavMenu>
      </FooterNav>
    </Fragment>
  );
};

export default Footer;
