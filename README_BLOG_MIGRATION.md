# Blog System Migration

This document describes the migration of the blog system from HTML-based content to a structured JSON approach, which follows better web development practices by separating content from presentation.

## Project Structure

- `public/data/blogdata.json` - Contains metadata about blogs (id, title, image)
- `public/data/blogContents.json` - Contains all blog content in a structured format
- `src/components/blog/BlogContent.js` - Reusable component for rendering blog content
- `src/components/blog/BlogStyles.css` - CSS file with all blog styling

## Migration Completed

The migration from HTML files to JSON has been completed:
- All blog content is now stored in `blogContents.json`
- All HTML files have been deleted
- The BlogDetail component has been updated to only use JSON content
- HTML file references have been removed from `blogdata.json`

## Content Structure

Each blog in `blogContents.json` follows this structure:

```json
{
  "id": 1,
  "title": "Blog Title",
  "sections": [
    {
      "heading": "Section Heading",
      "image": "/path/to/image.jpg",
      "paragraphs": [
        "Paragraph 1 text",
        "Paragraph 2 text"
      ]
    }
  ]
}
```

## Adding New Blogs

For new blogs, simply add them directly to `blogContents.json` following the structure above, and add metadata to `blogdata.json`.

## Benefits of This Approach

1. **Separation of Concerns**: Content is separate from presentation
2. **Reusability**: The `BlogContent` component can be reused across the site
3. **Maintainability**: Easier to update styles without touching content
4. **Performance**: No need to parse HTML content
5. **Scalability**: Can easily support multiple languages or content versions 