import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <section className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Accelerate your technology with our managed services for your Business Growth!
        </motion.h1>
      </section>

      <section className="benefits">
        <h2>DG FutureTech's Benefits</h2>
        <div className="benefits-grid">
          <motion.div className="benefit-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Accessible & Responsive Support</h3>
            <p>Enhance productivity for your employees</p>
          </motion.div>
          {/* Add other benefit cards similarly */}
        </div>
      </section>

      <section className="security-commitment">
        <h2>Our Security Commitment</h2>
        <p>At DG FutureTech, safeguarding your data is our highest priority. We implement robust security measures across organizational, operational, and policy levels to ensure the protection of your data, applications, and infrastructure—keeping your business secure and resilient.</p>
      </section>

      <section className="it-success">
        <h2>DG FutureTech: Strengthening Your IT for Business Success</h2>
        <p>In today's digital world, your IT infrastructure is the backbone of your business. A reliable, scalable, and flexible IT environment directly impacts your ability to achieve business goals and exceed customer expectations.</p>
        <p>At DG FutureTech, we specialize in ensuring your technology works for you, not against you. As a trusted managed services provider, we help businesses optimize their IT infrastructure for maximum efficiency, security, and growth.</p>
      </section>

      <section className="cta">
        <h2>Take control of your success</h2>
        <p>Partner with DG FutureTech today. Contact us to discover how our expert IT solutions can drive your business forward.</p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
};

export default WhyChooseUs;