/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  box-shadow: 0px 2px 10px #00000033;
  width: 100%;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const NavbarBrand = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 20px;

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 20px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 0;
  }
`;

export const NavbarLink = styled.li`
  margin: 0 10px;
  font-size: 1.2em;

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
`;

export const Title = styled.h2`
  margin: 0 auto;
  color: black;
  text-align: center;
  font-size: 1.5rem;
  padding-left: 1rem;
`;
