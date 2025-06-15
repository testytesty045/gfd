import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogCard = ({ imgSrc, title, id }) => {
  const [imageError, setImageError] = useState(false);
  
  // Function to fix image paths that may be using old format
  const getImageSrc = (src) => {
    if (!src) return '/images/blogs/placeholder.jpg';
    
    // If path starts with InsertImages, update to new location
    if (src.includes('InsertImages')) {
      const filename = src.split('/').pop();
      return `/images/blogs/${filename}`;
    }
    
    return src;
  };

  return (
    <div className="blog-card">
      <div className="card-image">
      <img 
          src={imageError ? '/images/blogs/placeholder.jpg' : getImageSrc(imgSrc)}
  alt={title}
  loading="lazy"
          onError={() => setImageError(true)}
/>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <Link to={`/blog/${id}`} className="read-more-btn">Read More</Link>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

BlogCard.defaultProps = {
  imgSrc: '/images/blogs/placeholder.jpg'
};

export default BlogCard;
