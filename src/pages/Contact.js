import React from "react";
import "./styles/ContactUs.css";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import PageTitle from "../components/PageTitle";

import contactImage from "../../src/assets/images/contact-right-iamge.png";
import ContactForm from "../components/individual/ContactForm";

const Contact = () => {
  return (
    <>
      <PageTitle
        title="Contact Us"
        description="Get in touch with DG Future Tech. We're here to answer your questions and provide the IT support you need."
      />
      <div className="contact-page-wrapper">
        <motion.div
          className="contact-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading">Contact Us</h1>

          <p className="description">
            Reach Out for Reliable, Scalable IT Solutions.<br></br>
            Looking for a trusted IT partner? Reach out today and discover how
            we can support your business success.
          </p>

          <div className="contact-rectangles-container">
            <div className="rectangle rectangle-1">
              <div className="rectangle-content">
                <Phone className="contact-icon" />
                <h3 className="contact-title">Call Us</h3>
                <p className="contact-text">
                  Available 24x7 for your support needs
                </p>
              </div>
              <button
                className="contact-button"
                onClick={() => (window.location.href = "tel:+91 198")}
              >
                Call Now
              </button>
            </div>

            {/* <div className="rectangle rectangle-2">
              <div className="rectangle-content">
                <MessageCircle className="contact-icon" />
                <h3 className="contact-title">Chat with Sales</h3>
                <p className="contact-text">Speak with our sales team</p>
              </div>
              <button className="contact-button">Start Chat</button>
            </div> */}

            <div className="rectangle rectangle-3">
              <div className="rectangle-content">
                <Calendar className="contact-icon" />
                <h3 className="contact-title">Schedule Meeting</h3>

                <p className="contact-text">Book a meeting with our team</p>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/rachna-kolhapure-dgfuturetech/30min?month=2025-04",
                    "_blank"
                  )
                }
                className="contact-button"
              >
                Schedule
              </button>
            </div>
          </div>

          <img
            src={contactImage}
            alt="Customer Support"
            className="person-image"
          />
        </motion.div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
