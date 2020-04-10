import React from 'react';
import { Row, Col } from 'reactstrap';

import Social from '../Services/Social.js';
import Transportation from '../Services/Transportation.js';
import Organization from '../Services/Organization.js';
import Styling from '../Services/Styling.js';
import Health from '../Services/Health.js';
import Media from '../Services/Media.js';
import Hygiene from '../Services/Hygiene.js';
import Interview from '../Services/Interview.js';
import Romantic from '../Services/Romantic.js';
import Footer from './Footer.js';

import '../Styles/services.css';

// import smile from '../Assets/c-services.png';
import Header from './Header.js';

const Services = (props) => {
  return (
    <div className='services-wrapper'>
      <Header headerText='Services' />
      <div className='services-intro'>
        {/* <img src={smile} alt='smile' className='services-page-image'></img> */}
        <p>
          Our services include coaching in the following areas. We are also able
          to customize services to meet the unique needs of each individual.{' '}
        </p>
      </div>
      <div className='container'>
        <Row>
          <Col sm='6'>
            <Social />
          </Col>
          <Col sm='6'>
            <Transportation />
          </Col>
        </Row>
        <Row>
          <Col sm='6'>
            <Organization />
          </Col>
          <Col sm='6'>
            <Styling />
          </Col>
        </Row>
        <Row>
          <Col sm='6'>
            <Health />
          </Col>
          <Col sm='6'>
            <Media />
          </Col>
        </Row>
        <Row>
          <Col sm='6'>
            <Hygiene />
          </Col>
          <Col sm='6'>
            <Interview />
          </Col>
        </Row>
        <Row>
          <Col sm='6' md={{ size: 6, offset: 3 }}>
            <Romantic />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
