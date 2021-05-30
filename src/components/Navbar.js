import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../assets/images/logo.svg';

const navBars = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Recipes',
    to: '/recipes',
  },
  {
    name: 'Tags',
    to: '/tags',
  },
  {
    name: 'About',
    to: '/about',
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn">
            <FiAlignJustify onClick={() => setShow(!show)} />
          </button>
        </div>
        <div className={`nav-links ${show ? 'show-links' : ''}`}>
          {navBars.map(nav => (
            <Link className="nav-link" activeClassName="active-link" to={nav.to} key={nav.name}>
              {nav.name}
            </Link>
          ))}
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
