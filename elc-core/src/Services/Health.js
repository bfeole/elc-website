import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Collapse } from 'reactstrap';



const Health = (props) => {
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
    <CardTitle style={{fontSize: '18px', fontWeight: '500'}}>Diet & Exercise</CardTitle>
    {button}
    <Collapse isOpen={isOpen}>
    <CardText style={{paddingTop: '10px'}}>Setting up dietary and exercise patterns can be challenging. We provide guidance and support as these new healthy habits are being established.</CardText>
    {/* <ListGroup>
      <ListGroupItem>Basic Nutrition and Diet Education</ListGroupItem>
      <ListGroupItem>Fitness and Active lifestyle choices</ListGroupItem>
      <ListGroupItem>Body awareness and movement </ListGroupItem>
    </ListGroup> */}
    </Collapse>
  </Card>

  );
  };

  export default Health;