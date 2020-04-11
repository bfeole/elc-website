import React from 'react';
import { Row, Col } from 'reactstrap';

import '../Styles/services.css';

import Header from './Header.js';
import ServicesSkill from './ServicesSkill.js';
import {
  faUserFriends,
  faCarSide,
  faHourglassHalf,
  faMagic,
  faRunning,
  faThumbsUp,
  faHandsWash,
  faUserTie,
  faHandHoldingHeart,
} from '@fortawesome/free-solid-svg-icons';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      social: {
        title: 'Social Skills',
        copy:
          'Establishing positive social behaviors and a sense of awareness builds self worth. We provide training to help individuals build healthy relationships.',
        icon: faUserFriends,
      },
      transportation: {
        title: 'Transportation Skills',
        copy:
          'We provide training and support to safely navigate ride sharing apps and public transportation.',
        icon: faCarSide,
      },
      time: {
        title: 'Time Management',
        copy:
          'We provide the training and techniques to help practice the skills needed to improve organization and time management.',
        icon: faHourglassHalf,
      },
      grooming: {
        title: 'Personal Styling & Grooming',
        copy:
          'Appearance and presentation are unique to each individual. We provide basic personal styling for daily life, employment and specific events.',
        icon: faMagic,
      },
      diet: {
        title: 'Diet & Exercise',
        copy:
          'Setting up dietary and exercise patterns can be challenging. We provide guidance and support as these new healthy habits are being established.',
        icon: faRunning,
      },
      media: {
        title: 'Social Media Training',
        copy:
          'Social media is constantly changing. It can be our best friend and our worst enemy. We provide the training to help navigate and establish boundaries online.',
        icon: faThumbsUp,
      },
      hygiene: {
        title: 'Personal Care & Hygiene',
        copy:
          'Cleanliness and self care are essential for overall good health. We provide basic instruction to reinforce healthy habits.',
        icon: faHandsWash,
      },
      interview: {
        title: 'Employment Preparation',
        copy:
          'Professional presentation involves body language and eye contact. We provide the training needed to increase success in a working environment.',
        icon: faUserTie,
      },
      romantic: {
        title: 'Romantic Relationships',
        copy:
          'We work one on one or with couples to develop healthy communication and mutual respect.',
        icon: faHandHoldingHeart,
      },
    };
  }

  render() {
    return (
      <div className='services-wrapper'>
        <Header headerText='Services' />
        <div className='services-intro'>
          {/* <img src={smile} alt='smile' className='services-page-image'></img> */}
          <p>
            Our services include coaching in the following areas. We are also
            able to customize services to meet the unique needs of each
            individual.{' '}
          </p>
        </div>
        <div className='container'>
          <Row>
            <Col sm='6'>
              <ServicesSkill
                skillTitle={this.state.social.title}
                skillCopy={this.state.social.copy}
                icon={this.state.social.icon}
              />
            </Col>
            <Col sm='6'>
              <ServicesSkill
                skillTitle={this.state.transportation.title}
                skillCopy={this.state.transportation.copy}
                icon={this.state.transportation.icon}
              />
            </Col>
          </Row>
          <Row>
            <Col sm='6'>
              <ServicesSkill
                skillTitle={this.state.time.title}
                skillCopy={this.state.time.copy}
                icon={this.state.time.icon}
              />
            </Col>
            <Col sm='6'>
              <ServicesSkill
                skillTitle={this.state.grooming.title}
                skillCopy={this.state.grooming.copy}
                icon={this.state.grooming.icon}
              />
            </Col>
          </Row>
          <Row>
            <Col sm='6'>
              <ServicesSkill
                skillTitle={this.state.diet.title}
                skillCopy={this.state.diet.copy}
                icon={this.state.diet.icon}
              />
            </Col>
            <Col sm='6'>
              <ServicesSkill
                skillTitle={this.state.media.title}
                skillCopy={this.state.media.copy}
                icon={this.state.media.icon}
              />
            </Col>
          </Row>
          <Row>
            <Col sm='6'>
              <ServicesSkill
                skillTitle={this.state.hygiene.title}
                skillCopy={this.state.hygiene.copy}
                icon={this.state.hygiene.icon}
              />
            </Col>
            <Col sm='6'>
              <ServicesSkill
                skillTitle={this.state.interview.title}
                skillCopy={this.state.interview.copy}
                icon={this.state.interview.icon}
              />
            </Col>
          </Row>
          <Row>
            <Col sm='6' md={{ size: 6, offset: 3 }}>
              <ServicesSkill
                skillTitle={this.state.romantic.title}
                skillCopy={this.state.romantic.copy}
                icon={this.state.romantic.icon}
              />
            </Col>
          </Row>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Services;
