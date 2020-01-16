import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, Collapse } from 'reactstrap';



const Safety = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="mt-4" body>
    <CardTitle>Safety Training</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>See Details</Button>
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