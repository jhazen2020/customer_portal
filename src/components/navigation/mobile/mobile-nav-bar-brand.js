import React from "react";
import { Link } from "react-router-dom";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <Link to="/">
      Jesse Hazen
      </Link>
    </div>
  );
};
