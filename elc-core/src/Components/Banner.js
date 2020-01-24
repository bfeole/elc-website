import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

import elclogo from '../Assets/elc-logo-web-crop.png';

const Banner = (props) => {
  return (
    <div>
      <Jumbotron style={{ backgroundImage: `url(${elclogo})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '0px'}}>
        <h1 className="display-4 font-weight-normal">Exceptional Life Coaching</h1>
        <p className="lead font-weight-normal">We help ensure exceptional teens and young adults have the opportunity to gain the confidence and skills needed to live as independently as possible.</p>
        <hr className="my-2" />
        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
        <p className="lead" style={{marginBottom: '0px'}}>
        <Button color='primary' style={{ margin: '1rem' }}>Contact Us</Button>
        <Button color='secondary' style={{ margin: '1rem' }}>Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Banner;
