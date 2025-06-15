import React, { useState, useEffect } from 'react';
import IntroForm from './IntroForm';
import AssessmentForm from './AssessmentForm';
import ThankYou from './ThankYou';
import heroImage from "../../../assets/images/hero.png";
import ServicesBanner from '../../common/ServicesBanner';
import styles from './SecurityAssessment.module.css';

const SecurityAssessmentApp = () => {
  const [step, setStep] = useState('intro');
  const [userData, setUserData] = useState(null);
  const [score, setScore] = useState(null);

  // Scroll to top whenever step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleIntroSubmit = (data) => {
    setUserData(data);
    window.scrollTo(0, 0); // Force scroll before state update
    setStep('assessment');
  };

  const handleAssessmentSubmit = (assessmentScore) => {
    setScore(assessmentScore);
    window.scrollTo(0, 0); // Force scroll before state update
    setStep('thankyou');
  };

  const renderStep = () => {
    switch (step) {
      case 'intro':
        return <IntroForm onSubmit={handleIntroSubmit} />;
      case 'assessment':
        return <AssessmentForm userData={userData} onSubmit={handleAssessmentSubmit} />;
      case 'thankyou':
        return <ThankYou userData={userData} score={score} />;
      default:
        return <IntroForm onSubmit={handleIntroSubmit} />;
    }
  };

  return (
    <>
      <ServicesBanner
        title="Security Assessment"
        heroImage={heroImage}
        compactMode={true}
        description="Evaluate -> Fortify -> Stay Ahead of Emerging Threats."
      />
      <p className={styles.introText}>
          Protect your business from cyber threats with a <strong>free security assessment</strong> of our website. Our experts will analyze your site for vulnerabilities, misconfigurations, and potential risks—providing you with a clear, actionable report at no cost. Take the first step toward stronger security and peace of mind.
        </p>
        {/* <h2 className={styles.sectionTitle}>
          <span>
            With our flexible Managed Services model, you get IT support
            tailored to your needs:
          </span>
        </h2> */}
      <div id="security-assessment-content" className="security-assessment-container">
        {renderStep()}
      </div>
    </>
  );
};

export default SecurityAssessmentApp; 