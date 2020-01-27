import React from 'react';
import {  Row, Col, } from 'reactstrap';

import Social from '../Services/Social.js'
import Transportation from '../Services/Transportation.js';
import Organization from '../Services/Organization.js';
import Styling from '../Services/Styling.js';
import Health from '../Services/Health.js';
import Media from '../Services/Media.js';
import Footer from './Footer.js';

// import '../Styles/services.css';

// import claremedal from '../Assets/clare-medal-caro-2.png';
// import AboutCarousel from './AboutCarousel.js';
import Hygiene from '../Services/Hygiene.js';
import Interview from '../Services/Interview.js';
import Romantic from '../Services/Romantic.js';

const Services = (pros) => {

  return ( 
    <div className='services-wrapper'>
      <div className='services-intro'>
        {/* <AboutCarousel /> */}
        <h4 className='display-4'>Services</h4>
        <p>Everyone has their own unique set of goals. Please inquire about the services listed below if you have any questions. </p>
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
        <Media />
      </Col>
    </Row>
    <Row>
      <Col sm="6">
        <Hygiene />
      </Col>
      <Col sm="6">
        <Interview />
      </Col>
    </Row>
    <Row>
      <Col sm="6" md={{ size: 6, offset: 3 }}>
        <Romantic />
      </Col>
      </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
