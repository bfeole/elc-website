import React from 'react';


import {Button} from 'reactstrap';
import AboutCarousel from './AboutCarousel.js';
// import scimg from '../Assets/sc-web.png';
import aboutimg from '../Assets/sc-about-web.png';
import '../Styles/about.css';

const AboutCard = () => {
  return (
    <div className='about-color-wrapper'>
    <div className='about-wrapper'>
      <div className='about-image-container'>
        <img src={aboutimg} alt='image here' className='about-image'></img>
      </div>
      <div className='about-content'>
        <div className='about-copy'>
        <h2>Welcome to Exceptional Life Coaching!</h2>
        We are here to support, encourage, motivate and care for one another so that we can each live
        our own exceptional lives. As a certified Pediatric Developmental Therapist and a certified 
        Special Needs Life Coach, this is my life’s work. As a sister of a young adult with special
        needs and as a passionate advocate for this community with over ten years of experience, I am looking forward to continuing to serve the special needs community.
        </div>
        <Button color='primary' style={{ margin: '1rem'}}>Contact Us</Button>
      </div>
    </div>
    </div>
  );
};

export default AboutCard;
