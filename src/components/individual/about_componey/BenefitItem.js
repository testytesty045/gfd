import React from 'react';
import styles from '../../../components/styles/companyvision.module.css';

const BenefitItem = (props) => {
    return (
      <div className={styles["benefit-item"]}>
        <div className={styles["benefit-header"]}>
          <span className={styles["benefit-icon"]}>{props.icon}</span>
          <span className={styles["benefit-title"]}>{props.title}</span>
        </div>
        <div className={styles["benefit-description"]}>
          {props.description}
        </div>
      </div>
    )
  }
  
  export default BenefitItem
  