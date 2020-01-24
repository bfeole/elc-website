import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Styling = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" style={{backgroundColor: '#f1f1f1', minHeight: '150px'}} body>
    <CardTitle style={{fontSize: '18px', fontWeight: 'bold'}}>Personal Styling & Grooming</CardTitle>
    <Button color="primary" onClick={toggle} style={{ marginTop: '1rem', maxWidth: '205px', alignSelf: 'center', padding: '5px 60px 5px 60px' }}>See More</Button>
    <Collapse isOpen={isOpen}>
    <CardText>Appearance and presentation is unique to each individual. We provide basic personal styling for daily life, employment and specific events. </CardText>
    {/* <ListGroup>
      <ListGroupItem>Daily wear</ListGroupItem>
      <ListGroupItem>Dressing for events</ListGroupItem>
      <ListGroupItem>Retail and Online shopping assistance </ListGroupItem>
      <ListGroupItem>Learning makeup/hair styling </ListGroupItem>
    </ListGroup> */}
    </Collapse>
  </Card>

  );
  };

  export default Styling;