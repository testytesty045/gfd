import React, { useEffect } from 'react';
import { FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import '../../../pages/styles/AssessmentForm.css';

const ThankYou = ({ userData, score }) => {
  // Calculate percentage correctly
  const totalQuestions = 10;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Determine security level based on percentage
  let securityLevel = "Low";
  let securityColor = "#ff4d4d";
  
  if (percentage >= 70) {
    securityLevel = "High";
    securityColor = "#4caf50";
  } else if (percentage >= 40) {
    securityLevel = "Medium";
    securityColor = "#ff9800";
  }

  // Force immediate scroll to top when component mounts
  useEffect(() => {
    // Use both methods for better browser compatibility
    window.scrollTo(0, 0);
    
    // Fallback for modern browsers with smooth scrolling
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }, 0);
  }, []);

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <FaCheckCircle className="success-icon" />
        <h2>Thank You, {userData.name}!</h2>
        <p>Your security assessment has been completed successfully.</p>

        <div className="score-container">
          <div className="score-circle" style={{ borderColor: securityColor }}>
            <div className="score-value">{score}/{totalQuestions}</div>
            <div className="score-percentage">{percentage}%</div>
            <div className="score-label">Security Score</div>
          </div>
          <div className="score-details">
            <p>You achieved a <strong>{percentage}%</strong> security compliance rate based on your responses to the assessment.</p>
            <div className="progress-container">
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ 
                    '--progress-width': `${percentage}%`,
                    backgroundColor: securityColor 
                  }}
                ></div>
              </div>
              <div className="progress-label">
                <FaShieldAlt style={{ color: securityColor }} />
                <span style={{ color: securityColor, fontWeight: 'bold' }}>
                  {securityLevel} Security Level
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="next-steps">
          <h3>Next Steps</h3>
          <ul>
            <li>Check your email for a detailed report of your assessment</li>
            <li>Review areas where you answered "No" to identify potential security improvements</li>
            <li>Consider scheduling a consultation with our security experts</li>
          </ul>
        </div>

        <div className="contact-info">
          <p>If you have any questions about your assessment, please contact us at:</p>
          <p className="contact-email">security@dgfuturetech.com</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou; 