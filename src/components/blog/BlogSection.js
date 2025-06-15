
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import { BiRightArrowAlt } from 'react-icons/bi';
import './blog.css';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/data/blogData.json');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="loading">Loading featured blogs...</div>;

  return (
    <section className="blog-section">
      <h2 className="section-title">Latest <span>Blogs</span></h2>

      
      <div className="blog-cards-container">
        {blogs.slice(0, 3).map((blog) => (
          <div 
            key={blog.id} 
            className="blog-card-wrapper"
            data-aos="fade-up"
          >
            <BlogCard 
              imgSrc={blog.imgSrc}
              title={blog.title}
              id={blog.id}
            />
          </div>
        ))}
      </div>
      <div className="all-blogs-cta" data-aos="fade-up">
        <button 
          onClick={() => navigate('/blogs')} 
          className="view-all-btn"
        >
          View All Blogs <BiRightArrowAlt />
        </button>
      </div>
    </section>
  );
};

export default BlogSection;