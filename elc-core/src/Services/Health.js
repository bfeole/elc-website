import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Health = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" body>
    <CardTitle>Health & Nutrition</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>See Details</Button>
    <Collapse isOpen={isOpen}>
    <ListGroup>
      <ListGroupItem>Basic Nutrition and Diet Education</ListGroupItem>
      <ListGroupItem>Fitness and Active lifestyle choices</ListGroupItem>
      <ListGroupItem>Body awareness and movement </ListGroupItem>
    </ListGroup>
    </Collapse>
  </Card>

  );
  };

  export default Health;