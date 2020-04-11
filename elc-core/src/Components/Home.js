import React from 'react';
import ServicesCard from './ServicesCard';
import ContactCard from './ContactCard';
import Banner from './Banner';

// Styling
import '../Styles/home.css';
import '../Styles/banner.css';
import TestimonialCard from './TestimonialCard';
import SocialCard from './SocialCard';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <Banner />
      <ServicesCard />
      <TestimonialCard />
      <ContactCard />
      <SocialCard />
    </div>
  );
};

export default Home;
