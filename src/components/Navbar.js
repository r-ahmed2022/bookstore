import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="header-div">
        <h1 className="header-title"> Bookstore CMS</h1>
        <ul className="navlinks">
          <li className="link"><NavLink to="/" className="link">Books</NavLink></li>
          <li className="link"><NavLink to="/categories" className="link grey-text">Categories</NavLink></li>
        </ul>
      </div>
      <div className="header-div">
        <i className="material-icons large blue-text">account_circle</i>
      </div>
    </nav>
  );
}
