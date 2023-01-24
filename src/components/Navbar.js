/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="header-div">
        <h1 className="header-title"> Bookstore </h1>
            <ul className="navlinks">
                <li className="link"><Link to="/" className="link">Books</Link></li>
                <li className="link"><NavLink to="/categories" className="link grey-text">Categories</NavLink></li>
            </ul>
      </div>
      <div className="header-div">
       <i className="material-icons">account_circle</i>
      </div>
    </nav>
  );
}
