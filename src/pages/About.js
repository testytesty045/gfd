import React from 'react';
import styles from '../components/styles/common.module.css';
import CompanyVision from '../components/individual/about_componey/CompanyVision';
import ImageBoard from '../components/individual/about_componey/ImageBoard';
import BenefitsSection from '../components/individual/about_componey/BenefitsSection';
import CorporateProfile from '../components/individual/about_componey/CorporateProfile';
import Timeline from '../components/individual/about_componey/TimeLine';
import WhyChooseUs from '../components/individual/about_componey/WhyChooseUs';
import PageTitle from '../components/PageTitle';

const About = () => {
  
  return (
    <>
      <PageTitle 
        title="About Us" 
        description="Learn about DG FutureTech's mission, vision, and our commitment to providing exceptional IT services and solutions."
      />
      <div className={styles.AboutSection}>
        <CompanyVision />
        <ImageBoard />
        <Timeline/>
        <WhyChooseUs/>
        <BenefitsSection/>
        <CorporateProfile/>
      </div>
    </>
  );
};
export default About;