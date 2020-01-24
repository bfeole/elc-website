import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Transportation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" style={{backgroundColor: '#f1f1f1', minHeight: '150px'}} body>
    <CardTitle style={{fontSize: '18px', fontWeight: 'bold'}}>Transportation Skills</CardTitle>
    <Button color="primary" onClick={toggle} style={{ marginTop: '1rem', maxWidth: '205px', alignSelf: 'center', padding: '5px 60px 5px 60px' }}>See More</Button>
    <Collapse isOpen={isOpen}>
    <CardText>Learning to navigate the complicated ways of acquiring transportation foster a sense of independence while opening doors to new opportunities.</CardText>
    {/* <ListGroup>
      <ListGroupItem>Learning UBER and LYFT</ListGroupItem>
      <ListGroupItem>When and how to safely ask for directions</ListGroupItem>
      <ListGroupItem>Public Transportation Ex. (airport walk through, bus route, etc.) </ListGroupItem>
    </ListGroup> */}
    </Collapse>
  </Card>

  );
  };

  export default Transportation;