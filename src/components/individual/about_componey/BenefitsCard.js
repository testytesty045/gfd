import React from 'react';
import BenefitItem from './BenefitItem';
import styles from '../../../components/styles/companyvision.module.css';

const BenefitsCard = () => {
  return (
    <div className={styles["benefits-card"]}>
      <BenefitItem 
        icon="🏆"
        title="95% Client Satisfaction"
        description="We exceed expectations with a 95% client satisfaction rate, proving our dedication to exceptional IT solutions and support."
        />
      
      <BenefitItem 
        icon="💰"
        title="12+ Years in Industry"
        description="With 12+ years of experience, DG FutureTech ensures expert IT solutions, guiding your business through technology's complexities."
        />

<BenefitItem 
        icon="☁️"
        title="24x7x365 Support"
        description="We provide 24x7x365 support to keep your IT systems running smoothly with minimal downtime."
        />
      <BenefitItem 
        icon="🔒"
        title="ISO 27001:2022 Certified"
        description="        Your data security is our priority. ISO 27001:2022 certified, we ensure top-tier protection with robust security practices."
        />
    </div>
  );
};

export default BenefitsCard;