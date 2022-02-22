import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;
  box-shadow: rgba(42, 52, 61, 0.16) 0px 4px 8px 0px;
  border-color: transparent;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;



export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const CustomLinkSmall = styled(Link)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 900;
  font-size: 2.0rem;
  font-family: "Motiva Sans Light", sans-serif;
  padding: 0.5rem 0;
  color: #18216d;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    // color: gray;
    text-underline-position: under;
    // text-decoration: rgb(255, 130, 92) wavy underline;
    // background: lightgray;
    outline-width: 3px;
  outline-style: dashed;
  outline-offset: 10px;
  outline-color: orange;
  }
`;

export const logoSpan = styled("span")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    // color: gray;
    text-underline-position: under;
    // text-decoration: rgb(255, 130, 92) wavy underline;
    // background: lightgray;
    outline-width: 3px;
  outline-style: dashed;
  outline-offset: 10px;
  outline-color: orange;
  }
  `;


export const CustomButton = styled("button")`
transition: all 0.1s ease-in-out;
cursor: pointer;
 border: none;
 background-color:#18216d;

  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 20px;
  
  &:focus {

    text-underline-position: under;
    // text-decoration: white wavy underline;

  }
`;


