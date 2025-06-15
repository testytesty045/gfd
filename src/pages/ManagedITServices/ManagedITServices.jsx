import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner';
import heroImage from "../../assets/images/hero.png";
import './ManagedITServices.css';
import { getServiceById } from './services';

const ManagedITServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="managed-services">
      <ServicesBanner
        title="Managed IT Services"
        heroImage={heroImage}
        compactMode={true}
        caseStudyDescription="24x7 Network Operations Center for Monitoring & Support To Ensure Maximum Network Uptime"
      />

      <section id="overview" className="section bg-white">
        <div className="container">
          <div className="overview-header animate-fadeIn">
            <div className="tag">Focus on Your Business</div>
            <h2>We'll Handle Your IT!</h2>
            <p className="overview-description">
              At DG FutureTech, we provide comprehensive Managed IT solutions in Thunder Bay
              so you can forget about IT headaches and focus on what truly matters—growing your
              business.
            </p>
          </div>

          <motion.div 
            className="overview-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4">
              As a <span className="highlight">proactive IT outsourcing partner</span>, we don't just manage your technology—we help
              optimize it. Our team suggests meaningful process improvements, shares industry best
              practices, and helps you align IT with your business goals to drive 
              <span className="highlight"> better efficiency, security, and value</span>.
            </p>
            <p className="text-lg">
              With our <span className="highlight">flexible Managed Services model</span>, you get IT support tailored to your needs:
            </p>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h3>Fully Managed IT</h3>
                  <p>A bundled solution for a predictable, low fixed monthly cost</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h3>A La Carte IT Services</h3>
                  <p>Pick and choose the support you need, when you need it</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add remaining sections here with pure CSS classes */}
    </div>
  );
};

export default ManagedITServices;