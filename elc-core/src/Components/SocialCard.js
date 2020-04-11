import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import '../Styles/social.css';

const SocialCard = (props) => {
  return (
    <div
      className='social-card-wrapper'
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <div
        className='social-card-content'
        style={{
          display: 'flex',
          width: '60%',
          justifyContent: 'space-between',
          flexDirection: 'column',
          marginTop: 25,
        }}>
        <h2>Find us on social media.</h2>
        <p>Stay up to date with future developments.</p>
        <div
          className='social-card-icons'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: 'auto',
            fontSize: 45,
          }}>
          <a href='https://www.facebook.com/elclifeskills/'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='https://www.instagram.com/exceptionallifecoaching/'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://twitter.com/ELCLifeSkills'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
