import React from 'react';
import '../../../src/assets/css/blog.css';

/**
 * Component that displays the complete HTML content of a blog
 * with enhanced styling and SEO features
 */
const FullHtmlBlogContent = ({ blogData }) => {
  if (!blogData) return null;

  const blogDate = blogData.date || new Date().toISOString().split('T')[0];
  const blogCategory = blogData.category || 'Uncategorized';

  // Find the first image in the content sequence
  const firstImageIndex = blogData.contentSequence.findIndex(item => item.type === 'image');
  const firstImage = firstImageIndex !== -1 ? blogData.contentSequence[firstImageIndex] : null;

  // Render all content except the first image
  const restContent = blogData.contentSequence.filter((item, idx) => idx !== firstImageIndex);

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'image':
        // For all images except the first, render as before
        return (
          <div key={index} className={item.class || ''}>
            <img src={item.data.src} alt={item.data.alt} />
          </div>
        );
      case 'table':
        return (
          <div key={index} className={item.class || "table-container"}>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">{item.data.headers[0]}</th>
                  <th colSpan="2">{item.data.headers[1]}</th>
                </tr>
              </thead>
              <tbody>
                {item.data.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="headingthree">{row.pros.title}</td>
                    <td>{row.pros.description}</td>
                    <td className="headingthree">{row.cons.title}</td>
                    <td>{row.cons.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'bold':
        return (
          <b key={index}>
            {item.data}
          </b>
        );
      case 'strong':
        return (
          <strong key={index}>
            {item.data}
          </strong>
        );
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        const HeadingTag = item.type;
        return (
          <HeadingTag key={index} className={item.class}>
            {item.data}
          </HeadingTag>
        );
      case 'p':
        return (
          <p key={index}>
            {item.data}
          </p>
        );
      case 'ul':
      case 'ol':
        const ListTag = item.type;
        return (
          <ListTag key={index} className={item.class}>
            {item.data.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ListTag>
        );
      case 'br':
        return <br key={index} />;
      default:
        return null;
    }
  };

  return (
    <div className="blog-content">
      <div className="blog-meta">
        <span className="blog-date">{blogDate}</span>
        <span className="blog-author">By {blogData.author || 'Admin'}</span>
        <span className="blog-category">{blogCategory}</span>
      </div>

      {/* Render the first image as a banner if it exists */}
      {firstImage && (
        <div>
          <img src={firstImage.data.src} alt={firstImage.data.alt} />
        </div>
      )}

      <div className="blog-details">
        {restContent.map((item, index) => renderContent(item, index))}
      </div>

      <div className="blog-social-share">
        <h4>Share this article:</h4>
        <div className="social-links">
          <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(blogData.title)}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${encodeURIComponent(blogData.title)}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {blogData.tags && blogData.tags.length > 0 && (
        <div className="blog-tags">
          <h4>Tags:</h4>
          <div className="tag-list">
            {blogData.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Helper function to extract only the content inside the body tags
 * from the complete HTML
 */
function extractBodyContent(htmlString) {
  // Look for content between <body> and </body> tags
  const bodyMatch = htmlString.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  
  if (bodyMatch && bodyMatch[1]) {
    return bodyMatch[1];
  }
  
  // If no body tags are found, return the entire HTML
  return htmlString;
}

export default FullHtmlBlogContent; 