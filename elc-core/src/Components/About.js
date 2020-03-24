import React from 'react';
import { Button } from 'reactstrap';

import aboutimg from '../Assets/sc-home-2.png';
import '../Styles/about.css';

const About = () => {
  return (
    <div className='about-page-wrapper'>
      {/* <h2>About Me</h2> */}
      <div className='about-page-left'>
        <div className='about-page-image-wrapper'>
          <img
            src={aboutimg}
            alt='sara and clare'
            className='about-page-image'></img>
        </div>
        <h2>Sara Feole</h2>
        <div className='about-page-cert'>
          {/* <h3>Certifications</h3> */}
          <h4>
            {' '}
            <ul>Meredith College, Bachelor of Science in Child Development</ul>
            <ul>Infant Toddler Certification </ul>
            <ul>Certified Pediatric Developmental Therapist</ul>
            <ul>Certified Special Needs Life Quality Coach</ul>
          </h4>
        </div>
      </div>
      <div className='about-page-right'>
        <div className='about-page-content'>
          <div className='about-page-copy'>
            <p>
              Sara is a certified Special Needs Life Quality Coach and the
              Founder of Exceptional Life Coaching. Sara’s personal and
              professional experiences have led her to become a lifelong,
              passionate advocate for the special needs community.
            </p>
            <p>
              Throughout her career, Sara has enjoyed working in diverse
              settings, including teaching in the classroom and serving as a
              Direct Support Professional through the ARC of the Triangle. She
              also completed a internship with the Make-A-Wish foundation in
              Denver, Colorado. Her passion is advocacy for special needs adults
              and families, especially families experiencing stress of caring
              for a child with differences. She believes that every person,
              without question, should be given the opportunity to develop the
              confidence they need to live as independently as possible.
            </p>
            <p>
              One of Sara’s highest priorities is establishing and maintaining a
              sense of self worth in these individuals. She believes that people
              succeed best when there is continuous repetition and a working
              routine in order. She is an innovative thinker and loves working
              with others to create new ways to foster independence.
            </p>
            <p>
              A resident of Wake County, Sara is an avid believer in giving back
              to her local community and has served as a coach for the Special
              Olympics since 2007. In addition, she regularly volunteers at Duke
              Children’s Hospital, Camp Joy, and KidPowerNC
            </p>
          </div>
        </div>
        <Button color='primary' style={{ margin: '1rem' }}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default About;
