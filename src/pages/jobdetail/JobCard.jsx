import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { Briefcase, MapPin, Clock, Users } from "lucide-react";
import '../../pages/styles/Career.css';

const JobCard = ({ job }) => {
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const handleApplyClick = (e) => {
    e.preventDefault();
    setShowEmailOptions(true);
  };

  const handleEmailOption = (provider) => {
    const recipient = "contact@dgfuturetech.com";
    const subject = `Job Application for ${job.title}`;
    
    // Create email body with job details
    const body = `
Dear Hiring Manager,

I am writing to apply for the ${job.title} position.

Job Details:
- Title: ${job.title}
- Location: ${job.location}
- Job Type: ${job.jobType}
- Experience Required: ${job.experience}
- Skills Required: ${job.skills.join(', ')}

Please find my resume attached.

Thank you for your consideration.

Sincerely,
[Your Name]
    `;
    
    let url;
    if (provider === 'gmail') {
      url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else if (provider === 'outlook') {
      url = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(recipient)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    
    window.open(url, '_blank');
    setShowEmailOptions(false);
  };

  return (
    <Card className="job-card">
      <CardContent className="job-card-content">
        <h3 className="job-title">{job.title}</h3>
        
        <div className="job-meta-details">
          <div className="job-meta-item">
            <MapPin className="job-meta-icon" />
            <span>{job.location}</span>
          </div>
          
          <div className="job-meta-item">
            <Briefcase className="job-meta-icon" />
            <span>{job.jobType}</span>
          </div>
          
          <div className="job-meta-item">
            <Clock className="job-meta-icon" />
            <span>{job.experience}</span>
          </div>
          
          <div className="job-meta-item">
            <Users className="job-meta-icon" />
            <span>{job.openPositions || 1} Open {(job.openPositions || 1) > 1 ? 'Positions' : 'Position'}</span>
          </div>
        </div>
        
        <p className="job-description">
          {job.description}
        </p>
        
        <div className="job-skills">
          {job.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="job-skill-tag">
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="job-skill-more">
              +{job.skills.length - 3} more
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="job-card-footer">
        <Link to={`/career/jobs/${job.id}`} className="job-action-link">
          <Button 
            variant="outline" 
            className="job-action-button"
          >
            View Details
          </Button>
        </Link>
        
        {!showEmailOptions ? (
          <Button 
            variant="outline"
            className="job-action-button apply-button"
            onClick={handleApplyClick}
          >
            Apply Now
          </Button>
        ) : (
          <div className="email-options">
            <Button 
              variant="outline"
              className="email-option-button"
              onClick={() => handleEmailOption('gmail')}
            >
              Gmail
            </Button>
            <Button 
              variant="outline"
              className="email-option-button"
              onClick={() => handleEmailOption('outlook')}
            >
              Outlook
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;
