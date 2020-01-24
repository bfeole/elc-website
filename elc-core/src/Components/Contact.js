import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../Styles/contact.css'


const Contact = (props) => {
  return (
    <div className='contact-color-wrapper'>
    <div className='contact-wrapper'>
      <div className='contact-header'>
        <h4 className='display-4'>Get in touch!</h4>
        <p>Want to set up a quick chat or have a specific question? 
        Fill the form out below to send us an email. 
        We'll get back to you as soon as we can.</p>
      </div>
    <Form action="https://formspree.io/you@email.com">
      <FormGroup>
        <Label for="exampleEmail">Your Email Address</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email Address Here" />
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </Input>
      </FormGroup> */}
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

