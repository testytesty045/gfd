import React from 'react';
import './HeroSection.css';

const HeroSection = ({ 
  title, 
  subtitle,
  backgroundImage,
  overlayColor = 'default', 
  customOverlayGradient,
  bannerColor = 'default', 
  customBannerGradient,
  caseStudyTitle, 
  caseStudyText, 
  caseStudyLink,
  className = '',
  style = {}
}) => {
  
  const getOverlayGradient = () => {
    if (customOverlayGradient) return customOverlayGradient;
    
    switch(overlayColor) {
      case 'blue':
        return 'linear-gradient(177.88deg, rgba(22, 148, 206, 0.8) 4.56%, rgba(11, 33, 66, 0.8) 98.24%)';
      case 'dark':
        return 'linear-gradient(177.88deg, rgba(7, 19, 38, 0.8) 4.56%, rgba(11, 33, 66, 0.8) 98.24%)';
      default:
        return 'linear-gradient(177.88deg, rgba(14, 102, 143, 0.8) 4.56%, rgba(11, 33, 66, 0.8) 98.24%)';
    }
  };

  
  const getBannerGradient = () => {
    if (customBannerGradient) return customBannerGradient;
    
    switch(bannerColor) {
      case 'blue':
        return 'linear-gradient(177.88deg, #1694CE 4.56%, #0B2142 98.24%)';
      case 'dark':
        return 'linear-gradient(177.88deg, #071326 4.56%, #000000 98.24%)';
      case 'green':
        return 'linear-gradient(177.88deg, #34A853 4.56%, #0B2142 98.24%)';
      default:
        return 'linear-gradient(177.88deg, #1694CE 4.56%, #071326 98.24%)';
    }
  };

  
  const heroSectionStyle = backgroundImage 
    ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      } 
    : { 
        
        background: '#071326'
      };

  
  const showCaseStudy = caseStudyTitle || caseStudyText || caseStudyLink;

  return (
    <div className={`hero-banner-container ${className}`} style={style}>
      <div className="hero-section" style={heroSectionStyle}>
        <div className="hero-overlay" style={{ background: getOverlayGradient() }}></div>
        
        <div className="main-banner" style={{ background: getBannerGradient() }}>
          <div className="banner-content">
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
          </div>
        </div>
      </div>
      
      {showCaseStudy && (
        <div className="case-study-container" style={{ marginBottom: '20px' }}>
          <div className="case-study-content">
            {caseStudyTitle && <h2>{caseStudyTitle}</h2>}
            {caseStudyText && <p>{caseStudyText}</p>}
            {caseStudyLink && (
              <a href={caseStudyLink.url} className="case-study-link">
                {caseStudyLink.text || "Read the case study"}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection; 