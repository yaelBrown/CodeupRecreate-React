import React from 'react'
import logo from './img/logo.png';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Codeup Navbar Brand Logo" id="brand-logo" />
      <ul>
        <li>Students</li>
        <li>Employers</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
        <li>Apply Now</li>
      </ul>
    </nav>
  )
}

export default Navbar;
