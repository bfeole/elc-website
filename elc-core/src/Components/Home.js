import React from 'react';
import Services from './Services';
import About from './About';

// Styling
import '../Styles/home.css';
import '../Styles/banner.css';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='banner-wrapper'>
        <div className='banner-text'>
          <h1>Independent Living</h1>
          <div className='bullets-wrapper'>
            <ul className='banner-bullets'>
              <li>1 on 1 Coaching</li>
              <li>1 on 1 Coaching</li>
              <li>1 on 1 Coaching</li>
            </ul>
          </div>
          <button className='contact-button'>Contact Us</button>
          <button className='learn-button'>Learn More</button>
        </div>
        <div className='banner-img'>
          <img src={''} alt={<h1>Image Here</h1>} />
        </div>
      </div>
      <Services />
      <About />
    </div>
  );
};

export default Home;
