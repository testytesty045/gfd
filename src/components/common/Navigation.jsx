import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          DG FutureTech
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/why-choose-us" className="nav-link">Why Choose Us</Link>
          <Link to="/managed-services" className="nav-link">Managed IT</Link>
          <Link to="/co-managed" className="nav-link">Co-Managed IT</Link>
          <Link to="/server-admin" className="nav-link">Server Admin</Link>
          <Link to="/vapt" className="nav-link">VAPT</Link>
          <Link to="/app-development" className="nav-link">App Development</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <motion.button 
            className="nav-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;