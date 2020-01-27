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
        Everyone has a different path to independence. We offer a wide variety of services to ensure we are able to meet the unique needs of your loved one. 

        </p>
        <Button color='primary' href="/services" style={{ margin: '1rem' }}>Learn More</Button>
      </div>
      <div className='services-card-container'>
        <img src={pizza} alt='brandon pizza boxes' className='services-image'></img>
      </div>
    </div>
    </div>
  );
};

export default ServicesCard;