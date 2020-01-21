import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Styling = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" body>
    <CardTitle>Personal Styling & Grooming</CardTitle>
    <CardText>Appearance and presentation is unique to each individual. We provide basic personal styling for daily life, employment and specific events. </CardText>
    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>See Details</Button>
    <Collapse isOpen={isOpen}>
    <ListGroup>
      <ListGroupItem>Daily wear</ListGroupItem>
      <ListGroupItem>Dressing for events</ListGroupItem>
      <ListGroupItem>Retail and Online shopping assistance </ListGroupItem>
      <ListGroupItem>Learning makeup/hair styling </ListGroupItem>
    </ListGroup>
    </Collapse>
  </Card>

  );
  };

  export default Styling;