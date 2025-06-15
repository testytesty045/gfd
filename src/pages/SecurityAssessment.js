import React from 'react';
import SecurityAssessmentApp from '../components/individual/security-assessment/securityassessment';
import PageTitle from '../components/PageTitle';

const SecurityAssessment = () => {
  return (
    <>
      <PageTitle 
        title="Security Assessment" 
        description="Comprehensive security assessment solutions from DG Future Tech to identify vulnerabilities and strengthen your organization's security posture."
      />
    

      <div className="security-assessment-page">
        
        <SecurityAssessmentApp />
      </div>
    </>
  );
};

export default SecurityAssessment; 