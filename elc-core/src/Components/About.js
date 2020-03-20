import React from 'react';
import { Button } from 'reactstrap';

const About = () => {
  return (
    <div className='about-wrapper'>
      <h2>About</h2>
      <div className='about-image'>
        <img alt='image here'></img>
      </div>
      <div className='about-content'>
        <h2>Sara Feole, BS, ITFS, SNLQC </h2>
        <p>
          Sara Feole is the founder of Exceptional Life Coaching and has been a
          passionate advocate for the special needs community for over 15 years.
          Sara grew up with a younger sister with special needs, she has first
          hand experience navigating the in's and outs of raising someone who is
          differently abled.
        </p>
        <p>
          Sara graduated from Meredith College in 2016 with a Bachelor of
          Science Degree in Child Development.
        </p>
        <p>
          Throughout her career, Sara has enjoyed working in diverse settings,
          including teaching in the classroom and serving as a Direct Support
          Professional through the ARC of the Triangle. She also completed a
          internship with the Make-A-Wish foundation. Her passion is advocacy
          for special needs adults and families, especially families
          experiencing stress of caring for a child with differences. She
          believes that every young adult, without question, should be given the
          opportunity to develop the confidence they need to live as
          independently as possible.
        </p>
        <p>
          One of Sara’s highest priorities is establishing and maintaining a
          sense of self worth in these individuals. She believes that people
          succeed most when there is continuous repetition and functioning
          routine in order. She is an innovative thinker and loves working with
          others to create new ways to foster independence. A resident of Wake
          County, Sara is an avid believer in giving back to her local community
          and has served as a coach for the Special Olympics since 2007. In
          addition, she regularly volunteers at Duke Children’s Hospital, Camp
          Joy, and KidPowerNC
        </p>
        <Button color='primary' style={{ margin: '1rem' }}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default About;
