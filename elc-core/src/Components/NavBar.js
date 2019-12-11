import React from 'react';

// Styling
import '../Styles/navbar.css';

const NavBar = () => {
  return (
    <div className='nav-bar-wrapper'>
      <h3 className='logo'>ELC</h3>
      <ul>
        <li>We Offer</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
