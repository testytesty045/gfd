import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar.js';
import Footer from '../footer/Footer.js';
// import ImageSection from '../common/ImageSection.js';
import styles from '../styles/navbar.module.css';

const MainHeader = () => {
  const location = useLocation();
  const showImageSection = ["/about", "/contact"].includes(location.pathname);

  return (
    <>
      <motion.div
        className="wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', margin: 0, padding: 0 }}
      >
        <Navbar />
    
        <div className={styles.mainContent} style={{ width: '100%', margin: '6rem 0 0 0', padding: 0 }}>
          <div className={styles.main_outlet} style={{ width: '100%', margin: 0, padding: 0 }}>
            <Outlet />
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};
export default MainHeader;