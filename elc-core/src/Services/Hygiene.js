import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Collapse } from 'reactstrap';

const Hygiene = props => {
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
        Personal Care & Hygiene
      </CardTitle>
      {button}
      <Collapse isOpen={isOpen}>
        <CardText style={{ paddingTop: '10px' }}>
          Cleanliness and self care are essential for overall good health. We
          provide basic instruction to reinforce healthy habits.{' '}
        </CardText>
      </Collapse>
    </Card>
  );
};

export default Hygiene;
