import React from 'react';
import './ShowCase.css';

const ShowCase = ({ backimage, title }) => {
  return (
    <div className="showcase-container" style={{ backgroundImage: `url(${backimage})` }}>
      <div className="showcase-overlay">
        <h1 className="showcase-title">{title}</h1>
      </div>
    </div>
  );
};

export default ShowCase; 