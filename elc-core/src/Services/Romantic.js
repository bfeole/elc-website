import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Collapse } from 'reactstrap';

const Romantic = props => {
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
        Romantic Relationships
      </CardTitle>
      {button}
      <Collapse isOpen={isOpen}>
        <CardText style={{ paddingTop: '10px' }}>
          Establishing and navigating meaningful close relationships has a
          direct correlation to happiness and self worth. We work one on one or
          with couples to develop healthy communication and mutual respect.{' '}
        </CardText>
        {/* <ListGroup>
      <ListGroupItem>Learning UBER and LYFT</ListGroupItem>
      <ListGroupItem>When and how to safely ask for directions</ListGroupItem>
      <ListGroupItem>Public Romantic Ex. (airport walk through, bus route, etc.) </ListGroupItem>
    </ListGroup> */}
      </Collapse>
    </Card>
  );
};

export default Romantic;
