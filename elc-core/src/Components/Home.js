import React from 'react';
import AboutCard from './AboutCard';
import Banner from './Banner';
import ServicesCard from './ServicesCard';
import ContactCard from './ContactCard';
import Footer from './Footer';

// Styling
import '../Styles/home.css';
import '../Styles/banner.css';
import TestimonialCard from './TestimonialCard';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <Banner />
      <AboutCard />
      <ServicesCard />
      <TestimonialCard />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default Home;
