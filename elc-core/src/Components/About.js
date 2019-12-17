import React from 'react';

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
          libero. In sed metus maximus, sagittis enim sollicitudin, venenatis
          neque. Donec non sapien ac ex rhoncus ultrices sit amet eget est.
          Fusce ultricies dolor eu purus vulputate condimentum. Aliquam non
          dictum mi, scelerisque faucibus elit. Fusce aliquam lectus nec enim
          finibus eleifend. Proin sit amet libero elit. In imperdiet, odio quis
          mattis aliquet, tortor mi hendrerit orci, eu gravida quam sapien
          pharetra lacus. Suspendisse potenti. Nam commodo augue vel lorem
          aliquet, in vulputate nisi fermentum. Praesent vel purus ullamcorper,
          pulvinar quam et, lacinia arcu. Sed eu varius urna, non consectetur
          tortor.
        </p>
        <button className='contact-button'>Contact Us</button>
      </div>
    </div>
  );
};

export default About;
