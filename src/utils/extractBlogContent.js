const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const extractBlogContent = (htmlContent) => {
  const $ = cheerio.load(htmlContent);
  
  // Extract metadata
  const title = $('title').text();
  const description = $('meta[name="description"]').attr('content');
  const keywords = $('meta[name="keywords"]').attr('content');

  // Extract all images
  const images = [];
  $('.blog_details img').each((i, el) => {
    images.push({
      src: $(el).attr('src'),
      alt: $(el).attr('alt')
    });
  });

  // Extract tables
  const tables = [];
  $('.table-container').each((i, table) => {
    const tableData = [];
    $(table).find('tr').each((j, row) => {
      const rowData = [];
      $(row).find('td, th').each((k, cell) => {
        rowData.push($(cell).text().trim());
      });
      if (rowData.length > 0) {
        tableData.push(rowData);
      }
    });
    tables.push(tableData);
  });

  // Extract all text content
  const content = [];
  $('.blog_details').find('h2, h3, p').each((i, el) => {
    const tag = $(el).prop('tagName').toLowerCase();
    const text = $(el).text().trim();
    if (text) {
      content.push({
        type: tag,
        text: text
      });
    }
  });

  return {
    title,
    description,
    keywords,
    images,
    tables,
    content
  };
};

const processBlogFiles = () => {
  const viewsDir = path.join(process.cwd(), 'public', 'views');
  const outputFile = path.join(process.cwd(), 'public', 'data', 'completeBlogs.json');
  
  const blogFiles = fs.readdirSync(viewsDir)
    .filter(file => file.startsWith('blog') && file.endsWith('.html'));

  const blogs = blogFiles.map(file => {
    const filePath = path.join(viewsDir, file);
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    const blogData = extractBlogContent(htmlContent);
    return {
      id: file.replace('.html', ''),
      ...blogData
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(blogs, null, 2));
  console.log('Blog content extraction completed successfully!');
};

module.exports = {
  extractBlogContent,
  processBlogFiles
}; 