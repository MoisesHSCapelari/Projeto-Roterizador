/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  FaStream,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {
  NavbarBrand,
  NavbarLink,
  NavbarLinks,
  NavbarWrapper,
    Title,


} from "./StyledNavBar";

export default function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  function handleLinkClick(path) {
    setActiveLink(path);
  }
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setIsOpen(true);
  }, [location.pathname]);

  return (
    <NavbarWrapper>
      <Title>Roterizador</Title>
    </NavbarWrapper>
  );
}
