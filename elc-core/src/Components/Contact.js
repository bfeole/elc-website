import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';

import '../Styles/contact.css';

const Contact = (props) => {
  return (
    <div className='contact-page-color-wrapper'>
      <Header headerText='Contact' />
      <ContactForm />
    </div>
  );
};

export default Contact;
