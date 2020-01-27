import React from 'react';
import AboutCard from './AboutCard';
import Banner from './Banner';
import ServicesCard from './ServicesCard';
import Contact from './Contact';

// Styling
import '../Styles/home.css';
import '../Styles/banner.css';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <Banner />
      <AboutCard />
      <ServicesCard />
      <Contact />
    </div>
  );
};

export default Home;
