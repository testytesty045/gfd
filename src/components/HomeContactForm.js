import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaCommentAlt,
  FaCheckCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./styles/Homecontatc.css";
import contactImage from "../assets/images/contact_home.png";


const EMAIL_CONFIG = {
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "bHJaAgy4hDQeZgrPp",
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_emskhtq",
  userTemplateId: process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID || "template_vqwi0ri",
  adminTemplateId: process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID || "template_1m3ha7k",
  adminEmail: process.env.REACT_APP_ADMIN_EMAIL || "contact@dgfuturetech.com",
  replyToEmail: process.env.REACT_APP_REPLY_TO_EMAIL || "info@dgfuturetech.com"
};


emailjs.init(EMAIL_CONFIG.publicKey);

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmails = async () => {
    try {
      
      const userTemplateParams = {
        to_name: formData.name,
        to_email: formData.email,
        company: formData.company || "Not provided",
        company_display: 'block',
        from_name: "DG Future Tech Team",
        message: "Thank you for contacting us. We will get back to you soon.",
        reply_to: EMAIL_CONFIG.replyToEmail,
        assessment_section_visible: 'none',
        contact_section_visible: 'block',
        user_score: "",
        questions_total: "",
        percentage: ""
      };

      console.log("Sending thank you email to user:", formData.email);
      const userResponse = await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.userTemplateId,
        userTemplateParams
      );
      console.log("User thank you email sent successfully:", userResponse.status);

      
      const adminTemplateParams = {
        to_name: "Admin",
        to_email: EMAIL_CONFIG.adminEmail,
        from_name: "Website Contact Form",
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        company_display: 'block',
        submitted_message: formData.message,
        reply_to: formData.email,
        assessment_details_visible: 'none',
        contact_details_visible: 'block',
        user_score: "",
        questions_total: "",
        percentage: ""
      };

      console.log("Sending notification to admin:", EMAIL_CONFIG.adminEmail);
      const adminResponse = await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.adminTemplateId,
        adminTemplateParams
      );
      console.log("Admin notification sent successfully:", adminResponse.status);

      return true;
    } catch (error) {
      console.error('Error sending emails:', error.text || error.message || error);
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
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });

          if (onClose) onClose();
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
    <div className="custom-contact-container">
      {showToast && (
        <div className="custom-toast">
          <FaCheckCircle className="toast-icon" />
          <div className="toast-content">
            <h4>Success!</h4>
            <p>Your message has been sent. We'll get back to you soon.</p>
          </div>
          <button className="toast-close" onClick={() => setShowToast(false)}>
            ×
          </button>
        </div>
      )}

      <div className="custom-form-section">
        <h2 className="custom-title">Connect With Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="custom-form-group">
            <FaUser className="custom-input-icon" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="custom-form-group">
            <FaEnvelope className="custom-input-icon" />
            <input
              type="email"
              placeholder="Email Id"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="custom-form-group">
            <FaPhone className="custom-input-icon" />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="custom-form-group">
            <FaBuilding className="custom-input-icon" />
            <input
              type="text"
              placeholder="Company Name"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="custom-form-group custom-message-group">
            <FaCommentAlt className="custom-input-icon" />
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>

          <button type="submit" className="custom-send-button" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="custom-image-section">
        <img src={contactImage} alt="Contact Us Illustration" />
      </div>
    </div>
  );
};
export default ContactForm;