import React from 'react';
import ScrollTriggeredContactForm from '../components/ScrollTriggeredContactForm';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="container">
        <div className="contact-section">
          <h1>Get in Touch</h1>
          <p>We're here to answer your questions and provide the solutions you need.</p>
          
          <ScrollTriggeredContactForm />
          
          <div className="content-section">
            <h2>Our Services</h2>
            <p>DG Future Tech provides innovative solutions to meet all your business needs.</p>
            <div className="service">
              <h3>Web Development</h3>
              <p>Custom web applications designed to enhance your online presence and streamline operations.</p>
            </div>
            <div className="service">
              <h3>Mobile Apps</h3>
              <p>Cutting-edge mobile applications for iOS and Android platforms.</p>
            </div>
            <div className="service">
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure and services to keep your business agile and secure.</p>
            </div>
          </div>
          
          <div className="contact-info">
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Business Street, New Delhi, India</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>info@dgfuture.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 