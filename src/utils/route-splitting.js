import React, { lazy, Suspense } from 'react';

// Default fallback loader
const DefaultLoading = () => (
  <div className="page-loading">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

/**
 * Creates a lazy-loaded route component
 * 
 * @param {Function} importFunc - Import function for the component
 * @param {React.Component} Fallback - Loading component to show while loading
 * @returns {React.Component} Lazy loaded component with suspense
 */
export const lazyRoute = (importFunc, Fallback = DefaultLoading) => {
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={<Fallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

/**
 * Prefetch a route component to improve perceived performance
 * Call this function when you think the user might navigate to a route
 * 
 * @param {Function} importFunc - Import function for the component
 */
export const prefetchRoute = (importFunc) => {
  // Start loading the component in the background
  importFunc().catch(() => {});
};

/**
 * Preload a route component to make it available instantly
 * 
 * @param {Function} importFunc - Import function for the component
 * @returns {Promise} Promise that resolves when the component is loaded
 */
export const preloadRoute = async (importFunc) => {
  try {
    await importFunc();
    return true;
  } catch (error) {
    console.error('Error preloading route:', error);
    return false;
  }
};

/**
 * Create route configurations for React Router with code splitting
 * 
 * @param {Array} routes - Array of route objects with path and importFunc
 * @returns {Array} Array of route objects with lazy-loaded components
 */
export const createSplitRoutes = (routes) => {
  return routes.map(route => ({
    ...route,
    element: lazyRoute(route.importFunc)(),
    preload: () => preloadRoute(route.importFunc),
    prefetch: () => prefetchRoute(route.importFunc)
  }));
};

/**
 * Example usage:
 * 
 * const routes = createSplitRoutes([
 *   { path: '/', importFunc: () => import('../pages/Home') },
 *   { path: '/about', importFunc: () => import('../pages/About') },
 * ]);
 * 
 * // In your router config:
 * <Routes>
 *   {routes.map(route => (
 *     <Route key={route.path} path={route.path} element={route.element} />
 *   ))}
 * </Routes>
 */ 