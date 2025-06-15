import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FullHtmlBlogContent from './FullHtmlBlogContent';
import './BlogStyles.css';
import PageTitle from '../../components/PageTitle';

// Mapping between numeric IDs and string IDs
const blogIdMap = {
  1: 'blogOne',
  2: 'blogTwo',
  3: 'blogThree',
  5: 'blogFive',
  6: 'blogSix',
  7: 'blogSeven',
  8: 'blogEight',
  9: 'blogNine',
  10: 'blogTen'
};

/**
 * Component that displays blog content exactly as it was in the original HTML files
 * with enhanced styling and SEO optimization
 */
const CompleteHtmlBlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Fetch blog metadata
        const blogRes = await fetch('/data/blogdata.json');
        if (!blogRes.ok) {
          throw new Error('Failed to fetch blog data');
        }
        
        const blogMeta = await blogRes.json();
        // Try to find blog by numeric ID
        const numericId = parseInt(id);
        const foundBlogMeta = blogMeta.find((b) => b.id === numericId);
        
        if (!foundBlogMeta) {
          throw new Error('Blog not found');
        }

        // Get the corresponding string ID
        const stringId = blogIdMap[numericId];

        // Fetch blog content
        const contentRes = await fetch('/data/completeBlogs.json');
        if (!contentRes.ok) {
          throw new Error('Failed to fetch blog content');
        }
        
        const completeBlogs = await contentRes.json();
        // Find blog by string ID
        const foundBlog = completeBlogs.find(content => content.id === stringId);
        
        if (!foundBlog) {
          throw new Error('Blog content not found');
        }

        // Merge metadata with content
        setBlog({
          ...foundBlogMeta,
          ...foundBlog
        });
        setError(null);
      } catch (error) {
        console.error('Error loading blog:', error);
        setError(error.message || "Failed to load blog");
        if (error.message === 'Blog not found') {
          navigate('/blogs');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
    
    // Scroll to top when blog loads
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (loading) return <div className="loading">Loading blog...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!blog) return <div className="error">Blog content not available</div>;

  // Extract meta description from blog content or use summary
  const getMetaDescription = () => {
    if (!blog) return '';
    
    if (blog.summary) return blog.summary;
    
    if (blog.content) {
      // Handle both string and object content
      const contentText = typeof blog.content === 'string' 
        ? blog.content 
        : blog.content.text || '';
      
      // Limit content to 160 characters for meta description
      return contentText.substring(0, 160) + (contentText.length > 160 ? '...' : '');
    }
    
    return `Read the full article about ${blog.title} on DG Future Tech`;
  };

  return (
    <>
      {blog && (
        <PageTitle
          title={blog.title}
          description={getMetaDescription()}
        />
      )}
      
      <div className="blog-container">
        <div className="back-link-container">
          <button className="back-heading" onClick={() => navigate('/blogs')}>
            <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Back to Blogs
          </button>
        </div>
        
        <div className="blog-header">
          {blog && <h1 className="blog-title">{blog.title}</h1>}
        </div>
        
        <main className="blog-main">
          {blog ? (
            <FullHtmlBlogContent blogData={blog} />
          ) : (
            <div className="blog-error">
              <p>We're having trouble loading this blog content. Please try again later.</p>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default CompleteHtmlBlogDetail; 