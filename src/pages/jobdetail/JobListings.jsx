import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JobFilters from './JobFilters';
import { Button } from "./button";
import jobsData from '../../data/jobsData';
import '../../pages/styles/Career.css';

const JobListings = () => {
  
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all_locations');
  const [selectedJobType, setSelectedJobType] = useState('all_types');
  const [selectedExperience, setSelectedExperience] = useState('all_experience');
  
  
  const [visibleJobCount, setVisibleJobCount] = useState(6);
  
  
  const locationOptions = Array.from(
    new Set(jobsData.map((job) => job.location))
  );

  
  useEffect(() => {
    let results = jobsData;
    
    
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTermLower) ||
          job.description.toLowerCase().includes(searchTermLower) ||
          job.skills.some(skill => 
            skill.toLowerCase().includes(searchTermLower)
          )
      );
    }
    
    
    if (selectedLocation && selectedLocation !== 'all_locations') {
      results = results.filter((job) => job.location === selectedLocation);
    }
    
    
    if (selectedJobType && selectedJobType !== 'all_types') {
      results = results.filter((job) => job.jobType === selectedJobType);
    }
    
    
    if (selectedExperience && selectedExperience !== 'all_experience') {
      results = results.filter((job) => job.experience === selectedExperience);
    }
    
    setFilteredJobs(results);
  }, [searchTerm, selectedLocation, selectedJobType, selectedExperience]);

  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedLocation('all_locations');
    setSelectedJobType('all_types');
    setSelectedExperience('all_experience');
  };

  
  const loadMoreJobs = () => {
    setVisibleJobCount((prev) => Math.min(prev + 6, filteredJobs.length));
  };

  return (
    <div className="job-listings-section">
      <div className="listings-container" id="job-listings">
        <div className="listings-header">
          <div className="listings-title-wrapper">
            <h2 className="listings-title">Find Your Dream Job</h2>
            <p className="listings-count">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} available
            </p>
          </div>
          
          {/* <Button variant="outline" className="alerts-button">
            <Bell className="alerts-icon" />
            Job Alerts
          </Button> */}
        </div>
        
        <JobFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          // Hidden filters
        />
        
        {filteredJobs.length === 0 ? (
          <div className="no-jobs-message">
            <h3 className="no-jobs-title">No jobs found</h3>
            <p className="no-jobs-text">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={resetFilters}>Reset Filters</Button>
          </div>
        ) : (
          <>
            <div className="jobs-grid">
              {filteredJobs.slice(0, visibleJobCount).map((job) => (
                <div key={job.id} data-job-id={job.id}>
                  <JobCard job={job} />
                </div>
              ))}
            </div>
            
            {visibleJobCount < filteredJobs.length && (
              <div className="load-more-container">
                <Button onClick={loadMoreJobs} variant="outline" size="lg">
                  Load More Jobs
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JobListings;