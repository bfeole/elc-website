import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';

import '../Styles/contact.css';

const Contact = (props) => {
  return (
    <div>
      <Header headerText='Contact' />
      <div className='contact-page-wrapper'>
        <ContactForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
