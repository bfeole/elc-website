import React from 'react';
import ServicesCard from './ServicesCard';
import ContactCard from './ContactCard';
import Footer from './Footer';
import Banner from './Banner';

// Styling
import '../Styles/home.css';
import '../Styles/banner.css';
import TestimonialCard from './TestimonialCard';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <Banner />
      <ServicesCard />
      <TestimonialCard />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default Home;
