import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesSkill = (props) => {
  return (
    <div
      className='service-skill-wrapper'
      style={{
        display: 'flex',
        minHeight: 300,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFEFC2',
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
          backgroundColor: '#bacfdd',
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
          height: 140,
          fontSize: '1em',
          paddingTop: 10,
        }}>
        <p>{props.skillCopy}</p>
      </div>
    </div>
  );
};

export default ServicesSkill;
