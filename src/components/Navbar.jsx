import React from "react";

import { Link } from "react-router-dom";
import { MdVideoLibrary } from "react-icons/md";

import SearchForm from "./SearchForm";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <MdVideoLibrary className="nav__logo-icon" />
        <span className="nav__logo-name">movie app</span>
      </Link>
      <SearchForm />
    </nav>
  );
};

export default Navbar;
