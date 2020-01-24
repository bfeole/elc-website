import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem, Fade, Collapse } from 'reactstrap';



const Social = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" style={{backgroundColor: '#f1f1f1', minHeight: '150px'}} body>
    <CardTitle style={{fontSize: '18px', fontWeight: 'bold'}}>Social & Interpersonal Skills</CardTitle>
    <Button color="primary" onClick={toggle} style={{ marginTop: '1rem', maxWidth: '205px', alignSelf: 'center', padding: '5px 60px 5px 60px' }}>See More</Button>
    <Collapse isOpen={isOpen}>
      <CardText>Social skills and social awareness are two of the most important and arguably the most difficult skills for teens and young adults. Establishing positive social behaviors and a sense of awareness builds self worth through guiding healthy relationships with peers.</CardText>
    {/* <ListGroup>
      <ListGroupItem>Navigating Relationships Ex. (Family, Personal, Romantic, Professional)</ListGroupItem>
      <ListGroupItem>Effective Communication Strategies</ListGroupItem>
      <ListGroupItem>Social Media Etiquette and Positive Interactions</ListGroupItem>
      <ListGroupItem>Casual Conversation</ListGroupItem>
      <ListGroupItem>Safety and Awareness Training (KidPower)</ListGroupItem>
    </ListGroup> */}
    </Collapse>
  </Card>

  );
  };

  export default Social;