import React, { useState, useEffect } from 'react';
import { FaUserShield, FaLock, FaKey, FaChartLine, FaDesktop, FaShieldAlt, FaExclamationTriangle, FaNetworkWired, FaUserSecret, FaFileAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../../../pages/styles/AssessmentForm.css';
import { fetchSecurityAssessmentQuestions } from '../../../data/services.js';
import { getEmailConfig } from '../../../config/email.js';

// Icon mapping object
const iconComponents = {
  FaUserShield,
  FaLock,
  FaKey,
  FaChartLine,
  FaDesktop, 
  FaShieldAlt,
  FaExclamationTriangle,
  FaNetworkWired,
  FaUserSecret,
  FaFileAlt
};

const AssessmentForm = ({ userData, onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [emailConfig, setEmailConfig] = useState({});

  useEffect(() => {
    // Fetch questions and email config when component mounts
    const fetchedQuestions = fetchSecurityAssessmentQuestions();
    const fetchedEmailConfig = getEmailConfig();
    
    setQuestions(fetchedQuestions);
    setEmailConfig(fetchedEmailConfig);
    
    // Initialize EmailJS
    emailjs.init(fetchedEmailConfig.publicKey);
  }, []);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
    setError('');
  };

  const sendUserEmail = async (score) => {
    const scorePercentage = Math.round((score / questions.length) * 100);
    
    // Determine security level based on percentage
    let securityLevel = "Low";
    
    if (scorePercentage >= 70) {
      securityLevel = "High";
    } else if (scorePercentage >= 40) {
      securityLevel = "Medium";
    }
    
    const userTemplateParams = {
      header_text: "Security Assessment Results",
      to_name: userData.name,
      to_email: userData.email,
      company: userData.company || "",
      user_score: score,
      questions_total: questions.length,
      percentage: scorePercentage,
      security_level: securityLevel,
      assessment_outcome_message: `Based on your answers, you achieved a ${scorePercentage}% security compliance rate (${score} out of ${questions.length}).`,
      assessment_section_visible: 'block',
      contact_section_visible: 'none',
      reply_to: emailConfig.replyToEmail
    };
    
    console.log("Sending assessment email to user:", userData.email);
    
    try {
      const response = await emailjs.send(
        emailConfig.serviceId, 
        emailConfig.userTemplateId, 
        userTemplateParams
      );
      console.log("User assessment email sent successfully:", response.status, response.text);
      return true;
    } catch (error) {
      console.error('Error sending user assessment email:', error);
      return false;
    }
  };

  const sendAdminEmail = async (score) => {
    const scorePercentage = Math.round((score / questions.length) * 100);
    
    // Determine security level based on percentage
    let securityLevel = "Low";
    
    if (scorePercentage >= 70) {
      securityLevel = "High";
    } else if (scorePercentage >= 40) {
      securityLevel = "Medium";
    }
    
    const adminTemplateParams = {
      header_text: "New Security Assessment Submitted",
      admin_name: "Admin",
      to_email: emailConfig.adminEmail,
      notification_message: `A new security assessment has been completed by ${userData.name}.`,
      user_name: userData.name,
      user_email: userData.email,
      company: userData.company || "Not Provided",
      user_score: score,
      questions_total: questions.length,
      percentage: scorePercentage,
      security_level: securityLevel,
      assessment_details_message: `The user achieved a ${scorePercentage}% security compliance rate (${score} out of ${questions.length} - ${securityLevel} security level).`,
      assessment_details_visible: 'block',
      contact_details_visible: 'none',
      reply_to: userData.email
    };
    
    console.log("Sending assessment notification to admin:", emailConfig.adminEmail);
    
    try {
      const response = await emailjs.send(
        emailConfig.serviceId, 
        emailConfig.adminTemplateId, 
        adminTemplateParams
      );
      console.log("Admin assessment notification sent successfully:", response.status, response.text);
      return true;
    } catch (error) {
      console.error('Error sending admin assessment notification:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (Object.keys(answers).length !== questions.length) {
      setError('Please answer all questions before submitting.');
      return;
    }

    setIsSubmitting(true);
    const score = Object.values(answers).filter(answer => answer === 'yes').length;
    
    try {
      const [userEmailSent, adminEmailSent] = await Promise.all([
        sendUserEmail(score),
        sendAdminEmail(score)
      ]);
      
      console.log('Email status - User:', userEmailSent, 'Admin:', adminEmailSent);
      
      // Immediately scroll to top before showing results
      window.scrollTo(0, 0);
      
      onSubmit(score);
    } catch (error) {
      console.error('Error in assessment submission process:', error);
      
      // Still scroll to top even if there was an error
      window.scrollTo(0, 0);
      
      onSubmit(score);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Early return if questions haven't loaded yet
  if (questions.length === 0) {
    return <div className="assessment-form-container">Loading assessment questions...</div>;
  }

  return (
    <div className="assessment-form-container">
      <h2>Security Assessment Questions</h2>
      <p>Please answer all questions to the best of your knowledge.</p>

      <form onSubmit={handleSubmit} className="assessment-form">
        {questions.map(question => {
          const IconComponent = iconComponents[question.icon];
          return (
            <div key={question.id} className="question-group">
              <div className="question-header">
                {IconComponent && <IconComponent className="question-icon" />}
                <span className="question-text">{question.text}</span>
              </div>
              <div className="answer-options">
                <label className={`radio-label ${answers[question.id] === 'yes' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value="yes"
                    checked={answers[question.id] === 'yes'}
                    onChange={() => handleAnswerChange(question.id, 'yes')}
                    required
                  />
                  Yes
                </label>
                <label className={`radio-label ${answers[question.id] === 'no' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value="no"
                    checked={answers[question.id] === 'no'}
                    onChange={() => handleAnswerChange(question.id, 'no')}
                    required
                  />
                  No
                </label>
              </div>
            </div>
          );
        })}

        {error && <div className="error-message">{error}</div>}

        <button 
          type="submit" 
          className="submit-button" 
          disabled={isSubmitting}
          style={{ backgroundColor: '#404ad8' }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
        </button>
      </form>
    </div>
  );
};

export default AssessmentForm;