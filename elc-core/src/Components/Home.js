import React from 'react';
import Services from './Services';
import AboutCard from './AboutCard';
import Banner from './Banner';

// Styling
import { Button } from 'reactstrap';
import '../Styles/home.css';
import '../Styles/banner.css';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <Banner />
      <AboutCard />
    </div>
  );
};

export default Home;
