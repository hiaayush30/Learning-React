import React from 'react';
import { NavLink } from 'react-router-dom';

//do not use window.location.href
const Navbar = () => {
  return (
    <nav className="flex space-x-4">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `px-4 py-2 rounded text-white ${isActive ? 'bg-red-500' : 'bg-gray-500'}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 rounded text-white ${isActive ? 'bg-red-500' : 'bg-gray-500'}`
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
