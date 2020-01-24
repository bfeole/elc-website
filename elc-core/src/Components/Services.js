import React, { useState } from 'react';
import {  Row, Col } from 'reactstrap';

import Social from '../Services/Social.js'
import Transportation from '../Services/Transportation.js';
import Organization from '../Services/Organization.js';
import Styling from '../Services/Styling.js';
import Health from '../Services/Health.js';
import Household from '../Services/Household.js';
import Safety from '../Services/Safety.js';

// import '../Styles/services.css';

import claremedal from '../Assets/clare-medal-caro-2.png';
import AboutCarousel from './AboutCarousel.js';

const Services = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='services-wrapper'>
      <div className='services-intro'>
        <AboutCarousel />
        {/* <img src={claremedal} alt='Tell ben to fix the photo :)' /> */}
        <h4>Services</h4>
        <p>Service sLorem ipsum bipsum dipsum misha con bingo blappa ding dang walal bingo lipsum bingo dingud.s Things are as they have ever seemed.  </p>
      </div>
      <div className="container">
      <Row>
      <Col sm="6">
        <Social />
      </Col>
      <Col sm="6">
      <Transportation />
      </Col>
    </Row>
    <Row>
      <Col sm="6">
        <Organization />
      </Col>
      <Col sm="6">
        <Styling />
      </Col>
    </Row>
    <Row>
      <Col sm="6">
        <Health />
      </Col>
      <Col sm="6">
        <Household />
      </Col>
    </Row>
    <Row>
      <Col sm="6" md={{ size: 6, offset: 3 }}>
        <Safety />
      </Col>
      </Row>

      </div>
    </div>

  
  );
};

export default Services;
