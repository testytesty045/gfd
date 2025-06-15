
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { Briefcase, MapPin, Clock } from "lucide-react";
import '../../pages/styles/Career.css';

const SimilarJobs = ({
  currentJobId,
  jobType,
  skills,
  category,
  allJobs
}) => {
  
  const similarJobs = allJobs
    .filter(job => {
      if (job.id === currentJobId) return false;
      
      
      const matchesType = job.jobType === jobType;
      
      
      const matchesCategory = category && job.category === category;
      
      
      const hasMatchingSkills = job.skills.some(skill => 
        skills.includes(skill)
      );
      
      
      return matchesType || matchesCategory || hasMatchingSkills;
    })
    .slice(0, 3); 
  
  if (similarJobs.length === 0) {
    return (
      <div className="no-similar-jobs">
        No similar jobs found
      </div>
    );
  }
  
  return (
    <div className="similar-jobs-grid">
      {similarJobs.map(job => (
        <Card key={job.id} className="similar-job-card">
          <CardContent className="similar-job-content">
            <h3 className="similar-job-title">{job.title}</h3>
            <div className="similar-job-meta">
              <div className="similar-job-meta-item">
                <MapPin className="similar-job-icon" />
                <span>{job.location}</span>
              </div>
              <div className="similar-job-meta-item">
                <Briefcase className="similar-job-icon" />
                <span>{job.jobType}</span>
              </div>
              <div className="similar-job-meta-item">
                <Clock className="similar-job-icon" />
                <span>{job.experience}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="similar-job-footer">
            <Link to={`/career/jobs/${job.id}`} className="similar-job-link">
              <Button variant="outline" className="similar-job-button">View Job</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SimilarJobs;
