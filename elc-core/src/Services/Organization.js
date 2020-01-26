import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Organization = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let button;

  if(isOpen) {
    button = <Button color="primary" onClick={toggle} style={{ marginTop: '1rem', maxWidth: '205px', alignSelf: 'center', padding: '5px 60px 5px 60px' }}>See Less</Button>
    
  } else {
    button = <Button color="primary" onClick={toggle} style={{ marginTop: '1rem', maxWidth: '205px', alignSelf: 'center', padding: '5px 60px 5px 60px' }}>See More</Button>
  }


  return (
    <Card className="mt-4" style={{backgroundColor: '#f1f1f1', minHeight: '150px'}} body>
    <CardTitle style={{fontSize: '18px', fontWeight: '500'}}>Organization & Time Management</CardTitle>
    {button}
    <Collapse isOpen={isOpen}>
    <CardText style={{paddingTop: '10px'}}>Creating a routine develops healthy habits while allowing you to find success in gaining employment and independent living. </CardText>
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

  export default Organization;