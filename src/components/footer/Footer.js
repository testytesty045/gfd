import React, { useState, useEffect } from "react";
import "./footer.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { footerText } from "../../data/services";

import logofooter from "../../assets/images/logo.png";
import garagelogo from "../../assets/images/garage.webp";
import isocertificate from "../../assets/images/iso_certification.webp";
import footerbootm from "../../assets/images/logo_dgg (1).svg";

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollToTop = () => {
    const duration = 1000; // Duration in milliseconds
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth acceleration and deceleration
      const easeInOutCubic = (progress) => {
        return progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      };

      window.scrollTo(0, start * (1 - easeInOutCubic(progress)));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleFooterLinkClick = (e, path) => {
    e.preventDefault();

    // Use React Router navigate function
    navigate(path);

    // After navigation completes, scroll to top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto", // Use 'auto' instead of 'smooth' to prevent double scrolling
      });
    }, 50);
  };

  return (
    <div className="footer-top">
      {showBackToTop && (
        <motion.button
          className="back-to-top"
          onClick={smoothScrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* Upper section with gradient background */}
      <div className="footer-background">
        <div className="footer-hover">
          <img src={garagelogo} alt="Garage Logo" className="footer-garage" />
          <Link to="https://www.garage.co.jp/en/" className="footer-title">
            <motion.span
              style={{ display: "inline-block" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {footerText["footer-garage"]}
            </motion.span>
          </Link>
        </div>
      </div>

      {/* Main footer area */}
      <div className="footer">
        <div className="footer-heading">
          <img src={logofooter} alt="Company Logo" className="footer-logo" />
          <p className="footer-name">{footerText["footer-heading"]}</p>
        </div>
        <hr />
        <motion.div
          className="footer-columns"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* Column 1 - Who we are */}
          <motion.div className="footer-column" variants={fadeInUp}>
            <h5 className="footer-link">{footerText["footer-heading-one"]}</h5>
            <p className="footer-p">
              <Link
                to="/life-at-dg"
                onClick={(e) => handleFooterLinkClick(e, "/life-at-dg")}
              >
                {footerText["footer-detail-twenty"]}
              </Link>
            </p>

            <p className="footer-p">
              <Link to="/faq" onClick={(e) => handleFooterLinkClick(e, "/faq")}>
                FAQ
              </Link>
            </p>

            <p className="footer-p">
              <Link
                to="/media"
                onClick={(e) => handleFooterLinkClick(e, "/media")}
              >
                Media
              </Link>
            </p>

            <p className="footer-p">
              <Link
                to="/contact"
                onClick={(e) => handleFooterLinkClick(e, "/contact")}
              >
                Contact
              </Link>
            </p>
            
            <p className="footer-p">
              <Link
                to="/securityassessment"
                onClick={(e) => handleFooterLinkClick(e, "/securityassessment")}
              >
                {footerText["footer-detail-sixteen"]}
              </Link>
            </p>
          </motion.div>

          {/* Column 2 - Services */}
          <motion.div className="footer-column" variants={fadeInUp}>
            <h5 className="footer-link">{footerText["footer-heading-two"]}</h5>
            <p className="footer-p">
              <Link
                to="/managed-services"
                onClick={(e) => handleFooterLinkClick(e, "/managed-services")}
              >
                {footerText["footer-detail-three"]}
              </Link>
            </p>
            <p className="footer-p">
              <Link
                to="/co-managed-it-services"
                onClick={(e) =>
                  handleFooterLinkClick(e, "/co-managed-it-services")
                }
              >
                Co-Managed IT Services
              </Link>
            </p>
            <p className="footer-p">
              <Link
                to="/infrastructuremanagement"
                onClick={(e) =>
                  handleFooterLinkClick(e, "/infrastructuremanagement")
                }
              >
                {footerText["footer-detail-two"]}
              </Link>
            </p>
            <p className="footer-p">
              <Link
                to="/networkmonitoring"
                onClick={(e) => handleFooterLinkClick(e, "/networkmonitoring")}
              >
                Network Monitoring
              </Link>
            </p>

            <p className="footer-p">
              <Link
                to="/vapt-assessment"
                onClick={(e) => handleFooterLinkClick(e, "/vapt-assessment")}
              >
                {footerText["footer-detail-twentyone"]}
              </Link>
            </p>
            <p className="footer-p">
              <Link
                to="/application-development"
                onClick={(e) =>
                  handleFooterLinkClick(e, "/application-development")
                }
              >
                {footerText["footer-detail-one"]}
              </Link>
            </p>
          </motion.div>

          {/* Column 3 - Case Study */}
          <motion.div className="footer-column" variants={fadeInUp}>
            <h5 className="footer-link">
              {footerText["footer-heading-three"]}
            </h5>
            <p className="footer-p">
              <Link
                to="/success-story-finTech"
                onClick={(e) =>
                  handleFooterLinkClick(e, "/success-story-finTech")
                }
              >
                {footerText["footer-detail-nine"]}
              </Link>
            </p>
            <p className="footer-p">
              <Link
                to="/success-story-retailBanking"
                onClick={(e) =>
                  handleFooterLinkClick(e, "/success-story-retailBanking")
                }
              >
                {footerText["footer-detail-ten"]}
              </Link>
            </p>
            <p className="footer-p">
              <Link
                to="/success-story-digitalPayment"
                onClick={(e) =>
                  handleFooterLinkClick(e, "/success-story-digitalPayment")
                }
              >
                {footerText["footer-detail-eleven"]}
              </Link>
            </p>
            <p className="footer-p">
              <Link
                to="/success-story-loanEnquiry"
                onClick={(e) =>
                  handleFooterLinkClick(e, "/success-story-loanEnquiry")
                }
              >
                {footerText["footer-detail-eleven1"]}
              </Link>
            </p>
            <p className="footer-p">
              <Link
                to="/success-story-webapp"
                onClick={(e) =>
                  handleFooterLinkClick(e, "/success-story-webapp")
                }
              >
                {footerText["footer-detail-eleven2"]}
              </Link>
            </p>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div className="footer-column" variants={fadeInUp}>
            <h5 className="footer-link">{footerText["footer-heading-four"]}</h5>
            <div className="social-links">
              <Link
                to="https://www.linkedin.com/company/dgfuturetech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.span
                  style={{ display: "inline-block" }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaLinkedin className="linkedin" />
                </motion.span>
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61553733212792"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.span
                  style={{ display: "inline-block" }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaFacebookSquare className="facebook" />
                </motion.span>
              </Link>
              <Link
                to="https://wa.me/+919175222091"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.span
                  style={{ display: "inline-block" }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaWhatsappSquare className="whatsapp" />
                </motion.span>
              </Link>
            </div>
            <motion.div className="footer-contact" variants={fadeInUp}>
              <BsFillTelephoneFill className="footer-contactno" />
              <p className="footer-p-contact">+919175222091</p>
            </motion.div>
          </motion.div>

          {/* Column 5 - ISO Certification */}
          <motion.div className="footer-column" variants={fadeInUp}>
            <h5 className="footer-link-iso">ISO 27001:2022</h5>
            <motion.img
              src={isocertificate}
              alt="ISO Certification"
              className="who-we-are-image"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </motion.div>

        <hr />
        <motion.div
          className="footer-details"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <p className="d-inline me-3">
            <Link to="/privacy-policy" className="footer-p">
              {footerText["footer-detail-six"]}
            </Link>
          </p>
          <p className="d-inline">
            <Link to="https://www.garage.co.jp/en/" className="footer-p">
              {footerText["footer-detail-seven"]}
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="footerlast"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <p>
            &copy; {currentYear} {footerText["footer-detail-eight"]}
          </p>
          <img
            src={footerbootm}
            alt="Company Logo"
            className="digital_garage_logo"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
