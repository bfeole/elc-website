import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Styling = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" body>
    <CardTitle>Personal Styling & Grooming</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
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