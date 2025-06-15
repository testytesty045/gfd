import React from 'react';
import { motion } from 'framer-motion';
import './ServicesBanner.css';

const ServicesBanner = ({ title, heroImage, compactMode, caseStudyDescription }) => {
  return (
    <section className={`services-banner ${compactMode ? 'compact' : ''}`}>
      <div className="services-banner-overlay"></div>
      <div className="services-banner-content container">
        <motion.h1 
          className="services-banner-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        
        {caseStudyDescription && (
          <motion.p 
            className="services-banner-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {caseStudyDescription}
          </motion.p>
        )}
      </div>
      
      {heroImage && (
        <div 
          className="services-banner-image" 
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
      )}
    </section>
  );
};

export default ServicesBanner;