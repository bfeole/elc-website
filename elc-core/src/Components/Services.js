import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem, Fade, Collapse } from 'reactstrap';


// import '../Styles/services.css';

const Services = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='services-wrapper'>
      <div className="container">
      <Row>
      <Col sm="6">
        <Card className="mt-4" body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Go somewhere</Button>
          <Collapse isOpen={isOpen}>
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          </Collapse>
        </Card>
      </Col>
      <Col sm="6">
        <Card className="mt-4" body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm="6">
        <Card className="mt-4" body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card className="mt-4" body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm="6">
        <Card className="mt-4" body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card className="mt-4" body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm="6" md={{ size: 6, offset: 3 }}>
        <Card className="mt-4" body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      </Row>

    </div>

      {/* <h2>Services</h2>
      <p>Lorem Services Ipsum</p>
      <div className='card-wrapper'>
        <div className='column services-column-one'>
          <div className='card-one'>
            <h4>card one</h4>
            <p>
              lorem ipsum loreum. lorem ipsum loreum.lorem ipsum loreumlorem
              ipsum loreum.lorem ipsum loreumlorem ipsum loreumlorem ipsum
              loreum.
            </p>
          </div>
          <div className='card-two'>
            <h4>card two</h4>
            <p>
              lorem ipsum loreum. lorem ipsum loreum.lorem ipsum loreumlorem
              ipsum loreum.lorem ipsum loreumlorem ipsum loreumlorem ipsum
              loreum.
            </p>
          </div>
        </div>
        <div className='column services-column-two'>
          <div className='card-three'>
            <h4>card three</h4>
            <p>
              lorem ipsum loreum. lorem ipsum loreum.lorem ipsum loreumlorem
              ipsum loreum.lorem ipsum loreumlorem ipsum loreumlorem ipsum
              loreum.
            </p>
          </div>
          <div className='card-four'>
            <h4>card four</h4>
            <p>
              lorem ipsum loreum. lorem ipsum loreum.lorem ipsum loreumlorem
              ipsum loreum.lorem ipsum loreumlorem ipsum loreumlorem ipsum
              loreum.
            </p>
          </div>
        </div>
      </div> */}
      {/* Insert expandable cards to be clicked on and blurb about services rendered */}
    </div>
  );
};

export default Services;
