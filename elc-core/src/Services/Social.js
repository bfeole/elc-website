import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem, Fade, Collapse } from 'reactstrap';



const Social = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" body>
    <CardTitle>Social & Interpersonal Skills</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
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

  export default Social;