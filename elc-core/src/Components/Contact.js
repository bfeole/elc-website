import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../Styles/contact.css'


const Contact = (props) => {
  return (
    <div className='contact-color-wrapper'>
    <div className='contact-wrapper'>
      <div className='contact-header'>
        <h4 className='display-4'>Get in touch!</h4>
        <p>Have some questions or want to get started? 
        Type a message below to send us an email. We'll get back to you as soon as possible. </p>
      </div>
    <Form action="https://formspree.io/sara.elclifeskills@gmail.com" method="POST">
      <FormGroup>
        <Label for="exampleEmail">Your Email Address</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email Address Here" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Your Message Here</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Enter Message To Send Here" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
      </div>
      </div>
  );
}

export default Contact;

