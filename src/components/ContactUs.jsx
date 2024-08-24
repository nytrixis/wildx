import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-buttons">
        <button className="contact-button" id='btn1'>RECIEVE NEWS</button>
        <button className="contact-button">DONATE</button>
      </div>
    </div>
  );
};

export default ContactUs;
