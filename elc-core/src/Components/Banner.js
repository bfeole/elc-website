import React from 'react';
import { Button } from 'reactstrap';

import '../Styles/banner.css';

const Banner = () => {
  return (
    <div className='banner-color-wrapper'>
      <div className='banner-wrapper'>
        <div className='banner-content'>
          <div className='banner-copy'>
            <div className='banner-welcome'>
              {/* // style={{ fontWeight: '400', fontSize: 40 }}> */}
              Welcome to Exceptional Life Coaching!
            </div>
            <p>
              Our mission is to ensure exceptional teens and young adults have
              the opportunity to gain the skills and confidence they need to
              live as independently as possible.
            </p>
          </div>
          <Button
            style={{ color: '#fafafa', marginRight: 10 }}
            outline
            href='/contact'>
            Contact Us
          </Button>
          <Button
            style={{ color: '#fafafa', width: 100 }}
            outline
            href='/about'>
            About
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
