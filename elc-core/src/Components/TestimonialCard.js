import React from 'react';

import testimg from '../Assets/pizza-caro-3.png';
import '../Styles/testimonial.css';

const TestimonialCard = () => {
  return (
    <div className='testimonial-color-wrapper'>
      <div className='testimonial-wrapper'>
        <div className='testimonial-image-container'>
          <img
            src={testimg}
            alt='brandon pizza'
            className='testimonial-image'></img>
        </div>
        <div className='testimonial-content'>
          <div className='testimonial-copy'>
            {/* <h4 className='display-4 quote-left'>"</h4> */}
            <h2>A Happy Client</h2>
            <p>
              "I have a son with an intellectual disability. I hired Sara to
              work on expanding his current independent living, technological
              and social skills. She has been remarkable. She is adept at the
              unique needs of this population and quickly assessed the right
              strategies for working with my son. She is professional,
              organized, compassionate, trustworthy and caring. She is prepared
              for each visit, gives valuable feedback and seeks out advise to
              achieve ideal outcomes. I would recommend ELC highly to work with
              your loved one!"
              {/* <h2 className='display-4 quote-right'>"</h2>  */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
