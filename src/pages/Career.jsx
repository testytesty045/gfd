import React from 'react';
import JobListings from './jobdetail/JobListings';
import './styles/Career.css';
import PerksBenefits from './jobdetail/PerksBenefits';
import heroImage from "../assets/images/hero.png";
import ServicesBanner from '../components/common/ServicesBanner';
import PageTitle from '../components/PageTitle';

const Career = () => {
  return (
    <>
    <PageTitle 
      title="Careers" 
      description="Join the team building tomorrow's technology at DG Future Tech. Explore current job openings and opportunities."
    />
    <ServicesBanner
    title="Work With Us"
    heroImage={heroImage}
    compactMode={true}
    description="Join the team building tomorrow's technology, today. Excited to build the future with us? Submit your application and our team will be in touch soon."
    />
    <div className="career-page">
      <JobListings />
      <PerksBenefits/>
    </div>
    </>
  );
};

export default Career;
