import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <h1>Math Magicians</h1>
    <ul className="navMenu">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </ul>
  </header>
);

export default NavBar;
