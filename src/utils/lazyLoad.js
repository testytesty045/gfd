import React, { lazy, Suspense } from 'react';

// Default loading component
const DefaultFallback = () => <div className="loading">Loading...</div>;

/**
 * Lazy loads a component with a Suspense wrapper
 * 
 * @param {Function} importFunc - Dynamic import function
 * @param {React.Component} fallback - Optional fallback component
 * @returns {React.Component} Lazy loaded component with Suspense
 */
export const lazyLoad = (importFunc, fallback = <DefaultFallback />) => {
  const LazyComponent = lazy(importFunc);
  
  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

/**
 * Creates a lazy loaded component with a custom loading component
 * 
 * @param {string} path - Path to the component
 * @param {React.Component} fallback - Optional fallback component
 * @returns {React.Component} Lazy loaded component
 */
export const lazyComponent = (path, fallback) => 
  lazyLoad(() => import(`../components/${path}`), fallback);

/**
 * Creates a lazy loaded page component with a custom loading component
 * 
 * @param {string} path - Path to the page component
 * @param {React.Component} fallback - Optional fallback component
 * @returns {React.Component} Lazy loaded page component
 */
export const lazyPage = (path, fallback) =>
  lazyLoad(() => import(`../pages/${path}`), fallback); 