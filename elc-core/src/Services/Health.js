import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Health = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" body>
    <CardTitle>Diet & Exercise</CardTitle>
    <CardText>Setting up dietary and exercise patterns can be challenging. We provide guidance and support as these new healthy habits are being established.</CardText>
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