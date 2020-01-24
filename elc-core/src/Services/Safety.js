import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Safety = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" style={{backgroundColor: '#f1f1f1', minHeight: '150px'}} body>
    <CardTitle style={{fontSize: '18px', fontWeight: 'bold'}}>Safety Training</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="primary" onClick={toggle} style={{ marginTop: '1rem', maxWidth: '205px', alignSelf: 'center', padding: '5px 60px 5px 60px' }}>See More</Button>
    <Collapse isOpen={isOpen}>
    <ListGroup>
      <ListGroupItem>Lorem ipsum bipsum gibberish stuff</ListGroupItem>
      <ListGroupItem>When safety arise then to hithero things and that nature</ListGroupItem>
      <ListGroupItem>More wimble bimbly stuff) </ListGroupItem>
    </ListGroup>
    </Collapse>
  </Card>

  );
  };

  export default Safety;