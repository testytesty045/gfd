import React, { useState, useEffect } from 'react';
import ContactForm from './HomeContactForm';
import styles from './styles/scrolltriggeredform.module.css';
import { FaTimes } from 'react-icons/fa';

const ScrollTriggeredContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasBeenClosed) return;
      
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollY = window.scrollY;
      
      const scrollPercentage = (scrollY / (scrollHeight - clientHeight)) * 100;
      
      if (scrollPercentage >= 20 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    
    if (!hasBeenClosed) {
      handleScroll();
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, hasBeenClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenClosed(true);
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.formContainer} ${styles.visible}`}>
      <div className={styles.overlay} onClick={handleClose}></div>
      <div className={styles.formWrapper}>
        <button 
          type="button"
          onClick={handleClose} 
          className={styles.closeButton}
          aria-label="Close form"
        >
          <FaTimes size={24} />
        </button>
        <ContactForm onClose={handleClose} />
      </div>
    </div>
  );
};

export default ScrollTriggeredContactForm; 