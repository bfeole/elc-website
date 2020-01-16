import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Transportation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" body>
    <CardTitle>Transportation Skills</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>See Details</Button>
    <Collapse isOpen={isOpen}>
    <ListGroup>
      <ListGroupItem>Learning UBER and LYFT</ListGroupItem>
      <ListGroupItem>When and how to safely ask for directions</ListGroupItem>
      <ListGroupItem>Public Transportation Ex. (airport walk through, bus route, etc.) </ListGroupItem>
    </ListGroup>
    </Collapse>
  </Card>

  );
  };

  export default Transportation;