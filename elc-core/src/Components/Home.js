import React from 'react';
import Services from './Services';
import About from './About';
import Banner from './Banner';

// Styling
import { Button } from 'reactstrap';
import '../Styles/home.css';
import '../Styles/banner.css';

const Home = () => {
  return (
    <div className='home-wrapper'>
      {/* <div className='banner-wrapper'>
        <div className='banner-text'>
          <h1>Independent Living</h1>
          <div className='bullets-wrapper'>
            <ul className='banner-bullets'>
              <li>1 on 1 Coaching</li>
              <li>1 on 1 Coaching</li>
              <li>1 on 1 Coaching</li>
            </ul>
          </div>
          <Button color='primary'>Contact Us</Button>
          <Button color='secondary'>Learn More</Button>
          </div> */}
          {/* <button className='contact-button'>Contact Us</button>
          <button className='learn-button'>Learn More</button> */}
        {/* <div className='banner-img'>
          <img src={''} alt={<h1>Image Here</h1>} />
        </div> */}
      {/* </div> */}
      <Banner />
      <Services />
      <About />
    </div>
  );
};

export default Home;
