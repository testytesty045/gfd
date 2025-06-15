import React, { memo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import companyLogo from '../../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import MenuItem from './MenuItem';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const servicesDropdownItems = React.useMemo(() => [
    { path: "/managed-services", label: "Managed Services" },
    { path: "/co-managed-it-services", label: "Co-Managed IT Services" },
    { path: "/infrastructuremanagement", label: "Infrastructure Management" },
    { path: "/networkmonitoring", label: "Network Monitoring" },
    { path: "/vapt-assessment", label: "VAPT Assessment" },
    { path: "/application-development", label: "Application Development" },
  ], []);

  const aboutUsDropdownItems = React.useMemo(() => [
    { path: "/about", label: "About" },
    { path: "/life-at-dg", label: "Life@DG FutureTech" },
    { path: "/media", label: "Media" },
  ], []);

  const successStoriesDropdownItems = React.useMemo(() => [
    { path: "/success-story-finTech", label: "Fintech Solutions for Digital Finance" },
    { path: "/success-story-retailBanking", label: "Retail Banking " },
    { path: "/success-story-digitalPayment", label: "Digital Payment Service Provider" },
    { path: "/success-story-loanEnquiry", label: "Smart Car Loan Platform" },
    { path: "/success-story-webapp", label: "Web Application Framework Migration" },
    
  ], []);

  const menuItems = React.useMemo(() => [
    { path: '/about', label: 'About Us', hasDropdown: true, dropdownItems: aboutUsDropdownItems },
    { path: '/services', label: 'Services', hasDropdown: true, dropdownItems: servicesDropdownItems },
    { path: '/serviceplans', label: 'Service Plans' },
    { path: '/success-stories', label: 'Success Stories', hasDropdown: true, dropdownItems: successStoriesDropdownItems },
    { path: '/Career', label: 'Careers' },
    { path: '/Contact', label: 'Contact' },
    { path: '/SecurityAssessment', label: 'Security Assessment' },
  ], [servicesDropdownItems, successStoriesDropdownItems, aboutUsDropdownItems]);

  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <NavLink to="/">
            <img
              src={companyLogo}
              alt="DG FutureTech Logo"
              className={styles.logo}
              width="120"
              height="40"
              loading="eager"
              fetchPriority="high"
            />
          </NavLink>
        </div>

        <div className={styles.emptySpace}></div>

        <div className={styles.navLinksContainer}>
          <div className={`${styles.navbarMenu} ${menuOpen ? styles.navbarMenuOpen : ''}`}>
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.path}
                {...item}
                isLast={index === menuItems.length - 1}
                toggleMenu={toggleMenu}
                isMenuOpen={menuOpen}
              />
            ))}
            
            {/* Mobile-only consultation button */}
            <a href="https://calendly.com/rachna-kolhapure-dgfuturetech/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mobileConsultationButton}>
              Book a Consultation
            </a>
          </div>
          
          <a href="https://calendly.com/rachna-kolhapure-dgfuturetech/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.consultationButton}>
            Book a Consultation
          </a>
          
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            type="button"
          >
            {!menuOpen ? <FaBars aria-hidden="true" /> : <FaTimes aria-hidden="true" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);