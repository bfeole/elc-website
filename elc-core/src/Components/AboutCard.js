import React from 'react';


import {Button} from 'reactstrap';
import AboutCarousel from './AboutCarousel.js';
// import scimg from '../Assets/sc-web.png';
import aboutimg from '../Assets/sc-about-web.png';
import '../Styles/about.css';

const AboutCard = () => {
  return (
    <div className='about-wrapper'>
      <div className='about-image-container'>
        <img src={aboutimg} alt='image here' className='about-image'></img>
      </div>
      <div className='about-content'>
      <h2>About Us</h2>
        <p className='about-copy'>
          Praesent imperdiet leo eget tempus elementum. Pellentesque porta lorem
          at ipsum consequat consequat. In hac habitasse platea dictumst. Duis
          neque nunc, malesuada gravida dignissim quis, accumsan et velit. Donec
          nec quam mauris. Aenean a dictum dolor. Aenean mollis finibus finibus.
          Sed a odio auctor massa accumsan porta eget vitae massa. Proin
          facilisis maximus diam tincidunt ullamcorper. Fusce sit amet nibh

        </p>
        <Button color='primary' style={{ margin: '1rem' }}>Contact Us</Button>
      </div>
    </div>
  );
};

export default AboutCard;
