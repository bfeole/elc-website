import React from 'react';
import {Button} from 'reactstrap';

const About = () => {
  return (
    <div className='about-wrapper'>
      <h2>About Us</h2>
      <div className='about-image'>
        <img alt='image here'></img>
      </div>
      <div className='about-content'>
        <p>
          Praesent imperdiet leo eget tempus elementum. Pellentesque porta lorem
          at ipsum consequat consequat. In hac habitasse platea dictumst. Duis
          neque nunc, malesuada gravida dignissim quis, accumsan et velit. Donec
          nec quam mauris. Aenean a dictum dolor. Aenean mollis finibus finibus.
          Sed a odio auctor massa accumsan porta eget vitae massa. Proin
          facilisis maximus diam tincidunt ullamcorper. Fusce sit amet nibh

        </p>
        <Button color='primary' style={{ margin: '1rem' }}>Contact Us</Button>
      </div>
    </div>
  );
};

export default About;
