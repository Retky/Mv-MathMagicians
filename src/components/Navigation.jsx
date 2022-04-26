import React from 'react';
import './navigation.css';
// import { Link } from "react-router-dom";

const NavBar = () => (
  <header>
    <h1>Math Magicians</h1>
    <ul className="navMenu">
      <li>Home</li>
      <li>Calculator</li>
      <li>Quote</li>
    </ul>
  </header>
);

export default NavBar;
