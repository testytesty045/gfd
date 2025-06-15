import React from 'react';
import { Search, Filter, MapPin, Briefcase } from 'lucide-react';
import { Input } from "./input";
import { Button } from "./button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import '../../pages/styles/Career.css';

const JobFilters = ({
  searchTerm,
  setSearchTerm,
  selectedLocation,
  setSelectedLocation,
  selectedJobType,
  setSelectedJobType,
  selectedExperience,
  setSelectedExperience,
  locationOptions,
  resetFilters
}) => {
  return (
    <div className="job-filters">
      <div className="filters-layout">
        <div className="search-container">
          <Search className="search-icon" />
          <Input
            placeholder="Search by job title, skill, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        {/* Hidden filter dropdowns and reset button
        <div className="filter-dropdown">
  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
    <SelectTrigger className="filter-trigger">
      <div className="filter-label">
        <MapPin className="filter-icon" />
        <SelectValue placeholder="Location" />
      </div>
    </SelectTrigger>
    <SelectContent className="bg-gray-800 text-white">
      <SelectItem value="all_locations" className="select-item-dark">All Locations</SelectItem>
      {locationOptions.map((location) => (
        <SelectItem key={location} value={location} className="select-item-dark">
          {location}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>

<div className="filter-dropdown">
  <Select value={selectedJobType} onValueChange={setSelectedJobType}>
    <SelectTrigger className="filter-trigger">
      <div className="filter-label">
        <Briefcase className="filter-icon" />
        <SelectValue placeholder="Job Type" />
      </div>
    </SelectTrigger>
    <SelectContent className="bg-gray-800 text-white">
      <SelectItem value="all_types" className="select-item-dark">All Types</SelectItem>
      <SelectItem value="Full-time" className="select-item-dark">Full-time</SelectItem>
      <SelectItem value="Part-time" className="select-item-dark">Part-time</SelectItem>
      <SelectItem value="Contract" className="select-item-dark">Contract</SelectItem>
      <SelectItem value="Internship" className="select-item-dark">Internship</SelectItem>
      <SelectItem value="Remote" className="select-item-dark">Remote</SelectItem>
    </SelectContent>
  </Select>
</div>
  <div className="filter-dropdown">
  <Select value={selectedExperience} onValueChange={setSelectedExperience}>
    <SelectTrigger className="filter-trigger">
      <div className="filter-label">
        <Filter className="filter-icon" />
        <SelectValue placeholder="Experience" />
      </div>
    </SelectTrigger>
    <SelectContent className="bg-gray-800 text-white">
      <SelectItem value="all_experience" className="select-item-dark">All Experience</SelectItem>
      <SelectItem value="0-1 Years" className="select-item-dark">0-1 Years</SelectItem>
      <SelectItem value="1-3 Years" className="select-item-dark">1-3 Years</SelectItem>
      <SelectItem value="3-5 Years" className="select-item-dark">3-5 Years</SelectItem>
      <SelectItem value="5+ Years" className="select-item-dark">5+ Years</SelectItem>
      <SelectItem value="Entry-level" className="select-item-dark">Entry-level</SelectItem>
      <SelectItem value="Mid-level" className="select-item-dark">Mid-level</SelectItem>
      <SelectItem value="Senior" className="select-item-dark">Senior</SelectItem>
    </SelectContent>
  </Select>
  </div>

  <Button variant="outline" onClick={resetFilters} className="reset-button">
   Reset Filters
  </Button>
        */}
      </div>
    </div>
  );
};

export default JobFilters;
