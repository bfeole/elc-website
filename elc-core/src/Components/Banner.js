import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

import '../Styles/banner.css';

import elclogo from '../Assets/elc-logo-web-crop.png';

const Banner = props => {
  return (
    <div className='banner-wrapper'>
      <Jumbotron
        style={{
          backgroundImage: `url(${elclogo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          marginBottom: '0px',
        }}>
        <h1 className='display-4 font-weight-normal'>
          Exceptional Life Coaching
        </h1>
        <p className='lead font-weight-normal'>
          Our mission is to ensure exceptional teens and young adults have the
          opportunity to gain the skills and confidence they need to live as
          independently as possible.
        </p>
        <p>
          We celebrate each individual by finding strengths in their
          differences.
        </p>
        <hr className='my-2' />
        <p className='lead' style={{ marginBottom: '0px' }}>
          <Button color='primary' style={{ margin: '1rem' }} href='/contact'>
            Contact Us
          </Button>
          <Button color='secondary' style={{ margin: '1rem' }} href='/services'>
            Learn More
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Banner;
