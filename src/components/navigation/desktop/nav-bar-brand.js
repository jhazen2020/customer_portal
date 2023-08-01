import React from "react";
import { Link } from "react-router-dom";
const logo = "https://djkmbr0egwze9.cloudfront.net/JH.svg";
export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <Link to="/">
      <img className="nav-bar__logo" src={logo} alt="React logo" />
      </Link>
    </div>
  );
};
