import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      path: '/home',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        {navLinks.map((link) => (
          <li className="navLinks" key={link.id}>
            <NavLink
              to={link.path}
              className={(navData) => (navData.isActive ? 'active-link' : 'none')}
              exact="true"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
