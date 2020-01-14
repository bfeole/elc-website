import React from 'react';

import '../Styles/services.css';

const Services = () => {
  return (
    <div className='services-wrapper'>
      <h2>Services</h2>
      <p>Lorem Services Ipsum</p>
      <div className='card-wrapper'>
        <div className='column services-column-one'>
          <div className='card-one'>
            <h4>card one</h4>
            <p>
              lorem ipsum loreum. lorem ipsum loreum.lorem ipsum loreumlorem
              ipsum loreum.lorem ipsum loreumlorem ipsum loreumlorem ipsum
              loreum.
            </p>
          </div>
          <div className='card-two'>
            <h4>card two</h4>
            <p>
              lorem ipsum loreum. lorem ipsum loreum.lorem ipsum loreumlorem
              ipsum loreum.lorem ipsum loreumlorem ipsum loreumlorem ipsum
              loreum.
            </p>
          </div>
        </div>
        <div className='column services-column-two'>
          <div className='card-three'>
            <h4>card three</h4>
            <p>
              lorem ipsum loreum. lorem ipsum loreum.lorem ipsum loreumlorem
              ipsum loreum.lorem ipsum loreumlorem ipsum loreumlorem ipsum
              loreum.
            </p>
          </div>
          <div className='card-four'>
            <h4>card four</h4>
            <p>
              lorem ipsum loreum. lorem ipsum loreum.lorem ipsum loreumlorem
              ipsum loreum.lorem ipsum loreumlorem ipsum loreumlorem ipsum
              loreum.
            </p>
          </div>
        </div>
      </div>
      {/* Insert expandable cards to be clicked on and blurb about services rendered */}
    </div>
  );
};

export default Services;
