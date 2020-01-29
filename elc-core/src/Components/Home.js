import React from 'react';
import AboutCard from './AboutCard';
import Banner from './Banner';
import ServicesCard from './ServicesCard';
import Contact from './Contact';
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
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
