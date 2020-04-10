import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesSkill = (props) => {
  return (
    <div
      className='service-skill-wrapper'
      style={{
        display: 'flex',
        // width: 500,
        minHeight: 300,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F8F5D0',
        margin: 10,
        padding: 10,
        borderRadius: 10,
      }}>
      <div
        className='service-skill-image'
        style={{
          color: 'gray',
          textShadow: '1px, 1px, 1px, #ccc',
          fontSize: '4em',
        }}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div
        className='service-skill-title-container'
        style={{
          width: '110%',
          backgroundColor: '#b3cddf',
          borderRadius: 15,
          padding: 10,
          margin: 10,
        }}>
        <h2 style={{ margin: 0 }}>{props.skillTitle}</h2>
      </div>
      <div
        className='services-skill-copy'
        style={{
          textAlign: 'left',
          maxWidth: '90%',
          height: 110,
          fontSize: '.95em',
        }}>
        <p>{props.skillCopy}</p>
      </div>
    </div>
  );
};

export default ServicesSkill;
