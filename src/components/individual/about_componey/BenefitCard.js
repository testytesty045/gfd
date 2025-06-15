import React from 'react';
import styles from '../../../components/styles/benifits.module.css';

const BenefitCard = ({ icon }) => {
    return (
      <div className={styles["benefit-card"]}>
        <img src={icon} alt="Benefit Icon" />
      </div>
    );
  };
  
  export default BenefitCard;
  