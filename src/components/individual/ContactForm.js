import React, { useState } from 'react';
import { FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaCommentAlt } from 'react-icons/fa';
import './contactform_main.moduel.css';
import emailjs from '@emailjs/browser';


const EMAIL_CONFIG = {
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "bHJaAgy4hDQeZgrPp",
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_emskhtq",
  userTemplateId: process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID || "template_vqwi0ri",
  adminTemplateId: process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID || "template_1m3ha7k",
  adminEmail: process.env.REACT_APP_ADMIN_EMAIL || "contact@dgfuturetech.com",
  replyToEmail: process.env.REACT_APP_REPLY_TO_EMAIL || "info@dgfuturetech.com"
};


emailjs.init(EMAIL_CONFIG.publicKey);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;
    
    if (!formData.firstName.trim()) {
      formErrors.firstName = 'First name is required';
      isValid = false;
    }
    
    if (!formData.lastName.trim()) {
      formErrors.lastName = 'Last name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(formErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmails = async () => {
    try {
      const userTemplateParams = {
        header_text: "Thank You for Contacting Us",
        to_name: `${formData.firstName} ${formData.lastName}`,
        to_email: formData.email,
        company: "",
        company_display: 'none',
        contact_confirmation_message: "Thank you for contacting DG Future Tech. We have received your message and will get back to you as soon as possible.",
        assessment_section_visible: 'none',
        contact_section_visible: 'block',
        user_score: "",
        questions_total: "",
        percentage: "",
        assessment_outcome_message: "",
        reply_to: EMAIL_CONFIG.replyToEmail,
      };
      
      console.log("Sending contact confirmation to user:", formData.email);
      const userResponse = await emailjs.send(
        EMAIL_CONFIG.serviceId, 
        EMAIL_CONFIG.userTemplateId, 
        userTemplateParams
      );
      console.log("User contact confirmation sent successfully:", userResponse.status);

      
      
      const adminTemplateParams = {
        header_text: "New Contact Form Submission", 
        admin_name: "Admin", 
        to_email: EMAIL_CONFIG.adminEmail,
        notification_message: `A new message has been received via the website contact form from ${formData.firstName} ${formData.lastName}.`,
        user_name: `${formData.firstName} ${formData.lastName}`,
        user_email: formData.email,
        company: "", 
        company_display: 'none', 
        submitted_message: formData.message,
        user_phone: formData.phone || "Not provided", 
        assessment_details_visible: 'none', 
        contact_details_visible: 'block',    
        
        user_score: "", 
        questions_total: "", 
        percentage: "", 
        reply_to: formData.email 
      };
      
      console.log("Sending contact notification to admin:", EMAIL_CONFIG.adminEmail);
      const adminResponse = await emailjs.send(
        EMAIL_CONFIG.serviceId, 
        EMAIL_CONFIG.adminTemplateId, 
        adminTemplateParams
      );
      console.log("Admin contact notification sent successfully:", adminResponse.status);
      
      return true;
    } catch (error) {
      console.error('Error sending contact emails:', error.text || error.message || error);
      
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        
        const success = await sendEmails();
        
        if (success) {
          
          setShowToast(true);
          setTimeout(() => setShowToast(false), 5000);
          
          
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
        } else {
          
          alert("There was a problem sending your message. Please try again later.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("There was a problem sending your message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="form-section">
      {showToast && (
        <div className="custom-toast">
          <FaCheckCircle className="toast-icon" />
          <div className="toast-content">
            <h4>Success!</h4>
            <p>Your message has been sent. We'll get back to you soon.</p>
          </div>
          <button className="toast-close" onClick={() => setShowToast(false)}>×</button>
        </div>
      )}

      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName"><FaUser className="form-icon" />First Name*</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? 'error' : ''}
              placeholder="John"
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName"><FaUser className="form-icon" />Last Name*</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? 'error' : ''}
              placeholder="Doe"
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email"><FaEnvelope className="form-icon" />Email*</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="contact@dgfuturetech.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone"><FaPhone className="form-icon" />Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message"><FaCommentAlt className="form-icon" />Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={errors.message ? 'error' : ''}
            placeholder="How can we help you?"
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
