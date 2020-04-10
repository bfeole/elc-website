import React from 'react';
import HeaderImage from '../Assets/about-banner-2.jpg';

const Header = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: 150,
        background: `linear-gradient(rgba(20, 20, 20, 0.35), rgba(20, 20, 20, 0.35)), url(${HeaderImage})`,
        backgroundSize: 'cover',
      }}>
      <h2 style={{ color: 'white', fontSize: 48, marginBottom: 0 }}>
        {props.headerText}
      </h2>
    </div>
  );
};

export default Header;
