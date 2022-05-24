import {
  FaBars,
  FaYoutubeSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.img`
  width: 200px;
  height: 63px;
`;

//Header Navigation Element
export const Nav = styled.nav`
  background: #ffffff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #000;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

//Footer Navigation
export const FooterNav = styled.nav`
  background: #e5e5e5;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const FooterNavMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const FooterParagraph = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 9px;
  padding: 0 1em;
  width: 50vw;
`;

export const FooterNavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.1em;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const YoutubeIcon = styled(FaYoutubeSquare)`
  color: #000;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: #000;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const TwitterIcon = styled(FaTwitterSquare)`
  color: #000;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const InstagramIcon = styled(FaInstagramSquare)`
  color: #000;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  color: #000;
  font-size: 1.8rem;
  cursor: pointer;
`;
