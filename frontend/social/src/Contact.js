import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import './navbar.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <h1>Contact Us</h1>
          <p>Please feel free to reach out to us with any questions or concerns.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
  
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
  
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Enter your message"></textarea>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
