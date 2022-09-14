import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <NavLink to="/" className="links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="CalculatorPage" className="links">
            Calculator
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="Quote" className="links">
            Quote
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
