import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Hygiene = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" style={{backgroundColor: '#f1f1f1', minHeight: '150px'}} body>
    <CardTitle style={{fontSize: '18px', fontWeight: 'bold'}}>Personal Care & Hygiene</CardTitle>
    <Button color="primary" onClick={toggle} style={{ marginTop: '1rem', maxWidth: '205px', alignSelf: 'center', padding: '5px 60px 5px 60px' }}>See More</Button>
    <Collapse isOpen={isOpen}>
    <CardText>Cleanliness and self care are essential for overall good health. We provide basic instruction in these areas. </CardText>
    {/* <ListGroup>
      <ListGroupItem>Basic Nutrition and Diet Education</ListGroupItem>
      <ListGroupItem>Fitness and Active lifestyle choices</ListGroupItem>
      <ListGroupItem>Body awareness and movement </ListGroupItem>
    </ListGroup> */}
    </Collapse>
  </Card>

  );
  };

  export default Hygiene;