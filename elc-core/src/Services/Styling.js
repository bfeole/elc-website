import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Collapse } from 'reactstrap';

const Styling = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let button;

  if (isOpen) {
    button = (
      <Button
        color='primary'
        onClick={toggle}
        style={{
          marginTop: '1rem',
          maxWidth: '205px',
          alignSelf: 'center',
          padding: '5px 60px 5px 60px',
        }}>
        See Less
      </Button>
    );
  } else {
    button = (
      <Button
        color='primary'
        onClick={toggle}
        style={{
          marginTop: '1rem',
          maxWidth: '205px',
          alignSelf: 'center',
          padding: '5px 60px 5px 60px',
        }}>
        See More
      </Button>
    );
  }

  return (
    <Card
      className='mt-4'
      style={{ backgroundColor: '#f1f1f1', minHeight: '150px' }}
      body>
      <CardTitle style={{ fontSize: '18px', fontWeight: '500' }}>
        Personal Styling & Grooming
      </CardTitle>
      {button}
      <Collapse isOpen={isOpen}>
        <CardText style={{ paddingTop: '10px' }}>
          Appearance and presentation are unique to each individual. We provide
          basic personal styling for daily life, employment and specific events.{' '}
        </CardText>
      </Collapse>
    </Card>
  );
};

export default Styling;
