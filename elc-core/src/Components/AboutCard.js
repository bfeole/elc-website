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
        We encourage and motivate our clients so they can learn how to use their unqique abilities to increase independence. As a certified Pediatric Developmental Therapist and a certified 
        Special Needs Life Coach, this is my life’s work. Having a sister with special
        needs and as a passionate advocate for this community with over ten years of experience, I am looking forward to continuing to serve the special needs community.
        </div>
        <Button color='primary' style={{ margin: '1rem'}}>Contact Us</Button>
      </div>
    </div>
    </div>
  );
};

export default AboutCard;
