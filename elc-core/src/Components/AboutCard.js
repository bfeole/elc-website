import React from 'react';

import { Button } from 'reactstrap';
// import AboutCarousel from './AboutCarousel.js';
// import scimg from '../Assets/sc-web.png';
import aboutimg from '../Assets/sc-home-2.png';
import '../Styles/about.css';

const AboutCard = () => {
  return (
    <div className='about-color-wrapper'>
      <div className='about-wrapper'>
        <div className='about-image-container'>
          <img
            src={aboutimg}
            alt='sara and clare'
            className='about-image'></img>
        </div>
        <div className='about-content'>
          <div className='about-copy'>
            <h2>Welcome to Exceptional Life Coaching!</h2>I have always believed
            we are here to support, encourage, motivate and care for one another
            so that we can each live our own exceptional lives. As a certified
            Pediatric Developmental Therapist and a certified Special Needs Life
            Coach, this is my life work. Having a sister with special needs has
            made me a passionate advocate for these individuals. I have over 10
            years of professional experience and I'm very excited to share this
            experience as I begin my journey with Exceptional Life Coaching.
          </div>
          <Button color='primary' href='/contact' style={{ margin: '1rem' }}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
