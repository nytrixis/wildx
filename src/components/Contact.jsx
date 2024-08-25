import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{' '}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contactwildx@gmail.com" target="_blank" rel="noopener noreferrer">
            contactwildx@gmail.com
          </a>
        </p>
        <p><strong>Phone:</strong> +91 9933506086</p>
        <p><strong>Address:</strong> IISER Kolkata</p>
      </div>
      <div className="social-media">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
