import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "./button";
import { Briefcase, MapPin, Clock, Bookmark, BookmarkCheck } from "lucide-react";
import SimilarJobs from './SimilarJobs';
import jobsData from '../../data/jobsData';
import '../../pages/styles/Career.css';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  
  const [bookmarkedJobs, setBookmarkedJobs] = useState(() => {
    const saved = localStorage.getItem('bookmarkedJobs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const jobId = parseInt(id, 10);
    const foundJob = jobsData.find(job => job.id === jobId);
    
    if (foundJob) {
      setJob(foundJob);
      
      window.scrollTo(0, 0);
    }
  }, [id]);

  const toggleBookmark = (jobId) => {
    setBookmarkedJobs((prev) => {
      const isBookmarked = prev.includes(jobId);
      let newBookmarks;
      
      if (isBookmarked) {
        newBookmarks = prev.filter(id => id !== jobId);
      } else {
        newBookmarks = [...prev, jobId];
      }
      
      
      localStorage.setItem('bookmarkedJobs', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const handleApplyClick = (e) => {
    e.preventDefault();
    setShowEmailOptions(true);
  };

  const handleEmailOption = (provider) => {
    if (!job) return;
    
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

  if (!job) {
    return (
      <div className="job-detail-loading">
        <div className="container">
          <p>Loading job details...</p>
        </div>
      </div>
    );
  }

  const isBookmarked = bookmarkedJobs.includes(job.id);

  return (
    <div className="job-detail-page">
      <div className="container mx-auto px-4 py-8">
        <div className="job-detail-container">
          <div className="job-detail-header">
            <div className="flex items-center justify-between">
              <h1 className="job-detail-title">{job.title}</h1>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => toggleBookmark(job.id)}
                title={isBookmarked ? "Remove bookmark" : "Bookmark this job"}
                className="bookmark-button"
              >
                {isBookmarked ? (
                  <BookmarkCheck className="bookmark-icon bookmarked" />
                ) : (
                  <Bookmark className="bookmark-icon" />
                )}
              </Button>
            </div>
            
            <div className="job-meta">
              <div className="meta-item">
                <MapPin className="meta-icon" />
                <span>{job.location}</span>
              </div>
              <div className="meta-item">
                <Briefcase className="meta-icon" />
                <span>{job.jobType}</span>
              </div>
              <div className="meta-item">
                <Clock className="meta-icon" />
                <span>{job.experience}</span>
              </div>
            </div>
            
            <div className="job-meta">
              <div className="meta-item">
                <span>Open Positions: {job.openPositions}</span>
              </div>
              <div className="meta-item">
                <span>Industry Type: {job.industryType}</span>
              </div>
              <div className="meta-item">
                <span>Functional Area: {job.functionalArea}</span>
              </div>
            </div>
            
            {job.postedDate && (
              <p className="job-posted-date">
                Posted on {new Date(job.postedDate).toLocaleDateString()}
              </p>
            )}
          </div>
          
          <div className="job-detail-body">
            <h2 className="detail-section-heading">Job Description</h2>
            <p className="detail-text">{job.description}</p>
            
            {job.responsibilities && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Responsibilities</h2>
                <ul className="detail-list">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.requirements && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Requirements</h2>
                <ul className="detail-list">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.technologies && job.technologies.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Technologies</h2>
                <ul className="detail-list">
                  {job.technologies.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.keyQualifications && job.keyQualifications.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Key Qualifications</h2>
                <ul className="detail-list">
                  {job.keyQualifications.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.requiredSkills && job.requiredSkills.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Required Skills</h2>
                <ul className="detail-list">
                  {job.requiredSkills.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.jobSkills && job.jobSkills.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Job Skills</h2>
                <ul className="detail-list">
                  {job.jobSkills.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.skillSet && job.skillSet.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Skill Set</h2>
                <ul className="detail-list">
                  {job.skillSet.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.niceToHave && job.niceToHave.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Nice to Have</h2>
                <ul className="detail-list">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.goodToHave && job.goodToHave.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Good to Have</h2>
                <ul className="detail-list">
                  {job.goodToHave.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.mustHave && job.mustHave.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Must Have</h2>
                <ul className="detail-list">
                  {job.mustHave.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.preferred && job.preferred.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Preferred</h2>
                <ul className="detail-list">
                  {job.preferred.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.tools && job.tools.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Tools</h2>
                <div className="job-skills-container">
                  {job.tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className="job-skill"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {job.education && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Education</h2>
                <p className="detail-text">{job.education}</p>
              </div>
            )}
            
            {job.shift && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Work Shifts</h2>
                <div className="job-shifts">
                  {job.shift.map((shift, index) => (
                    <span key={index} className="job-shift-tag">
                      {shift}
                    </span>
                  ))}
                </div>
                {job.shiftNote && (
                  <p className="detail-text shift-note">{job.shiftNote}</p>
                )}
              </div>
            )}
            
            <div className="detail-section">
              <h2 className="detail-section-heading">Skills</h2>
              <div className="job-skills-container">
                {job.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="job-skill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="job-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              {!showEmailOptions ? (
                <div style={{ width: "140px", margin: '0 auto' }}>
                  <Button 
                    className="apply-button" 
                    onClick={handleApplyClick}
                    size="lg"
                  >
                    Apply Now
                  </Button>
                </div>
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
              <div style={{ width: "200px", marginTop: '1rem' }}>
                <Link to="/career">
                  <Button 
                    variant="outline" 
                    className="back-button"
                    size="lg"
                  >
                    Back to Job Listings
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="similar-jobs-section">
            <h2 className="similar-jobs-heading">Similar Jobs</h2>
            <SimilarJobs 
              currentJobId={job.id} 
              jobType={job.jobType}
              skills={job.skills}
              category={job.category}
              allJobs={jobsData}
              onViewDetails={(job) => window.location.href = `/career/jobs/${job.id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;