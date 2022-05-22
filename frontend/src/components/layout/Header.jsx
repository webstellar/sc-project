import React, { Fragment } from "react";
import {
  Logo,
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
} from "./NavbarElements";

const Header = () => {
  return (
    <Fragment>
      <Nav>
        <NavLink to="/">
          <Logo src={require("../../images/socialcoin.png")} alt="Logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/our-story" activeStyle>
            Our Story
          </NavLink>
          <NavLink to="/discover" activeStyle>
            Discover
          </NavLink>
          <NavLink to="/sign-in" activeStyle>
            Sign in
          </NavLink>
          <NavBtnLink to="/get-started">Get started</NavBtnLink>
        </NavMenu>
      </Nav>
    </Fragment>
  );
};

export default Header;
