import React from 'react';
import { Button } from 'reactstrap';

const AboutButton = () => {
  return (
    <div>
      <Button color='primary' href='/contact' style={{ margin: '1rem' }}>
        Contact Us
      </Button>
    </div>
  );
};

export default AboutButton;
