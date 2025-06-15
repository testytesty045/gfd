# JavaScript Optimization Guide

This guide provides tips and techniques for optimizing JavaScript in your React application to improve Lighthouse scores.

## 1. Code Splitting

Code splitting is a technique that splits your bundle into smaller chunks that can be loaded on demand.

### How to implement:

- Use dynamic imports with React.lazy:
  ```jsx
  const MyComponent = React.lazy(() => import('./MyComponent'));
  
  function App() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </React.Suspense>
    );
  }
  ```

- Use our utility functions:
  ```jsx
  import { lazyLoad, lazyComponent, lazyPage } from '../utils/lazyLoad';
  
  const HomePage = lazyPage('HomePage');
  const HeavyComponent = lazyComponent('HeavyComponent');
  ```

- Use the `LazyWrapper` component:
  ```jsx
  import LazyWrapper from '../components/LazyWrapper';
  import React from 'react';
  
  const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
  
  function App() {
    return (
      <LazyWrapper>
        <HeavyComponent />
      </LazyWrapper>
    );
  }
  ```

## 2. Removing Duplicate Modules

Duplicate modules can significantly increase your bundle size.

### How to fix:

1. Identify duplicate packages using the DuplicatePackageCheckerPlugin
2. Add resolve aliases in craco.config.js:
   ```js
   alias: {
     'react': path.resolve('./node_modules/react'),
     'react-dom': path.resolve('./node_modules/react-dom'),
     // Add other packages as needed
   }
   ```

## 3. Tree Shaking

Tree shaking is the process of removing dead code.

### Optimization techniques:

1. Use ES modules (import/export) instead of CommonJS (require/module.exports)
2. Use named exports instead of default exports when possible
3. Make sure TerserPlugin's `unused` and `dead_code` options are enabled

```js
compress: {
  unused: true,
  dead_code: true
}
```

## 4. Bundle Analysis

Regularly analyze your bundle size to identify optimization opportunities.

```bash
# Run bundle analyzer
npm run analyze
```

## 5. Minification

Ensure proper minification is enabled:

- Use TerserPlugin with optimized settings
- Remove comments and console logs in production
- Configure compression options

## 6. Preloading and Prefetching

Use resource hints to load resources ahead of time:

```html
<!-- Preload critical resources -->
<link rel="preload" href="critical.js" as="script">

<!-- Prefetch resources for future navigation -->
<link rel="prefetch" href="future-page.js">
```

## 7. Use Web Workers for CPU-Intensive Tasks

Move CPU-intensive operations to web workers to keep the main thread responsive:

```js
// Create a new worker
const worker = new Worker('worker.js');

// Send data to the worker
worker.postMessage({ data: complexData });

// Receive results from the worker
worker.onmessage = (e) => {
  const result = e.data;
  // Use the result
};
```

## 8. Cache Resources

Use service workers to cache resources and improve load times on subsequent visits.

## 9. Optimize Third-Party Scripts

- Load third-party scripts asynchronously
- Use defer when possible
- Consider self-hosting critical third-party scripts

## 10. Use Production Mode

Ensure you're using production mode for your final build:

```js
// webpack.config.js
module.exports = {
  mode: 'production',
  // other config
};
```

## References

- [Web.dev - Code Splitting](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting)
- [Web.dev - Remove unused code](https://web.dev/articles/remove-unused-code)
- [Webpack - Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 