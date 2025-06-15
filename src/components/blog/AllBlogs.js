import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import '../styles/blog.css';
import PageTitle from '../../components/PageTitle';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/data/blogdata.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        setBlogs(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <PageTitle
        title="Blog Articles"
        description="Explore the latest insights on managed IT services, digital transformation, and technology trends from DG Future Tech experts."
      />
      
    <div className="all-blogs-page">
      <h1>All Blogs</h1>
        
        {loading && <div className="loading">Loading blogs...</div>}
        
        {error && <div className="error">{error}</div>}
        
        {!loading && !error && (
      <div className="all-blogs-container">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="blog-card-wrapper"
            >
              <BlogCard 
                imgSrc={blog.imgSrc}
                title={blog.title}
                id={blog.id}
              />
            </div>
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </div>
        )}
    </div>
    </>
  );
};

export default AllBlogs;