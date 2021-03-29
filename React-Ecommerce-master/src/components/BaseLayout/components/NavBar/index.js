import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
      <li><NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink></li>
      <li><NavLink activeClassName="selected" className="nav-link" to="/Cart">Cart</NavLink></li>
      <li><NavLink activeClassName="selected" className="nav-link" to="/Login" id="login">Login</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
