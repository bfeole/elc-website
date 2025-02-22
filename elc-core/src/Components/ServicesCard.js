import React from 'react';

import { Button } from 'reactstrap';

import medal from '../Assets/clare-medal-caro-2.png';
import '../Styles/about.css';
import '../Styles/services.css';

const ServicesCard = () => {
  return (
    <div className='services-color-wrapper'>
      <div className='services-card-wrapper'>
        <div className='services-card-content'>
          <h2 className='service-card-title-desktop'>Services</h2>
          <p className='services-card-copy'>
            Everyone has a different path to independence. We offer a wide
            variety of services to ensure we are able to meet the unique needs
            of your loved one.
          </p>
          <Button
            outline
            color='primary'
            href='/services'
            style={{ margin: '.5rem' }}>
            Learn More
          </Button>
        </div>
        <div className='services-card-container'>
          <img
            src={medal}
            alt='special olympics medal'
            className='services-image'></img>
        </div>
        <h2 className='service-card-title-mobile'>Services</h2>
      </div>
    </div>
  );
};

export default ServicesCard;
