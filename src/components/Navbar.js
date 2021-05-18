import React from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/images/logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <buttom className="nav-btn">
            <FiAlignJustify />
          </buttom>
        </div>
        <div className="nav-links show-links">
          <Link className="nav-link" activeClassName="active-link" to="/">
            Home
          </Link>
          <Link className="nav-link" activeClassName="active-link" to="/about">
            About
          </Link>
          <Link className="nav-link" activeClassName="active-link" to="/tags">
            Tags
          </Link>
          <Link
            className="nav-link"
            activeClassName="active-link"
            to="/recipes"
          >
            Recipes
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
