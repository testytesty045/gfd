import React from 'react';
import styles from './CTASection.module.css';

const CTASection = ({ 
  title = "", 
  titleElement = "h2",
  titleClassName = "",
  titleStyle = {},
  description = "",
  buttonText = "Contact Us Today",
  buttonLink = "https://calendly.com/rachna-kolhapure-dgfuturetech/30min",
  customClassName = "",
  buttonClassName = "",
  onButtonClick,
  children,
  align = "center",
  theme = "primary"
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.location.href = buttonLink;
    }
  };

  const TitleComponent = titleElement;

  return (
    <section className={`${styles.ctaSection} ${styles[theme]} ${customClassName}`}>
      <div className={`container ${styles[`align-${align}`]}`}>
        {title && (
          <TitleComponent 
            className={`${styles.ctaTitle} ${titleClassName}`}
            style={titleStyle}
          >
            {title}
          </TitleComponent>
        )}
        {description && <p className={styles.ctaDescription}>{description}</p>}
        {children}
        {buttonText && (
          <button
            className={`${styles.ctaButton} ${buttonClassName}`}
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default CTASection; 