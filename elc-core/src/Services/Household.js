import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Household = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" body>
    <CardTitle>Household Tasks</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>See Details</Button>
    <Collapse isOpen={isOpen}>
    <ListGroup>
      <ListGroupItem>Cleaning Routine and Household Maintence</ListGroupItem>
      <ListGroupItem>Room Organization</ListGroupItem>
      <ListGroupItem>Shared Space Awareness/Kindness </ListGroupItem>
    </ListGroup>
    </Collapse>
  </Card>

  );
  };

  export default Household;