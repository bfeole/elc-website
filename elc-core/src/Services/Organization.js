import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Organization = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" body>
    <CardTitle>Organization & Time Management</CardTitle>
    <CardText>Creating a routine develops healthy habits while allowing you to find success in gaining employment and independent living. </CardText>
    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>See Details</Button>
    <Collapse isOpen={isOpen}>
    <ListGroup>
    <ListGroupItem>Navigating Relationships Ex. (Family, Personal, Romantic, Professional)</ListGroupItem>
      <ListGroupItem>Effective Communication Strategies</ListGroupItem>
      <ListGroupItem>Social Media Etiquette and Positive Interactions</ListGroupItem>
      <ListGroupItem>Casual Conversation</ListGroupItem>
      <ListGroupItem>Safety and Awareness Training (KidPower)</ListGroupItem>
    </ListGroup>
    </Collapse>
  </Card>

  );
  };

  export default Organization;