import React from 'react';

import {Button} from 'reactstrap';

import pizza from '../Assets/pizza-caro-3.png';
import '../Styles/about.css';
import '../Styles/services.css';

const ServicesCard = () => {
  return (
    <div className='services-color-wrapper'>
    <div className='services-card-wrapper'>
      <div className='services-card-content'>
      <h2>Services</h2>
        <p className='services-card-copy'>
          Praesent imperdiet leo eget tempus elementum. Pellentesque porta lorem
          at ipsum consequat consequat. In hac habitasse platea dictumst. Duis
          neque nunc, malesuada gravida dignissim quis, accumsan et velit. Donec

        </p>
        <Button color='primary' style={{ margin: '1rem' }}>Learn More</Button>
      </div>
      <div className='services-card-container'>
        <img src={pizza} alt='image here' className='services-image'></img>
      </div>
    </div>
    </div>
  );
};

export default ServicesCard;