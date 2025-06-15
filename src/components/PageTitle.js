import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title, description }) => {
  const fullTitle = title ? `${title} | DG FutureTech India Private Limited` : 'DG FutureTech India Private Limited';
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={fullTitle} />}
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
};

export default PageTitle; 