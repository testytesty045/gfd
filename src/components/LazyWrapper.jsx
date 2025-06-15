import React from 'react';

/**
 * A wrapper component for lazy-loaded components
 * Shows a loading indicator while the component is being loaded
 * 
 * @example
 * ```jsx
 * const LazyComponent = React.lazy(() => import('./HeavyComponent'));
 * 
 * <LazyWrapper>
 *   <LazyComponent />
 * </LazyWrapper>
 * ```
 */
const LazyWrapper = ({ 
  children, 
  fallback = <div className="lazy-loading-spinner">Loading...</div>,
  onError
}) => {
  return (
    <React.Suspense fallback={fallback}>
      <ErrorBoundary onError={onError}>
        {children}
      </ErrorBoundary>
    </React.Suspense>
  );
};

/**
 * Error boundary component that catches errors in lazy-loaded components
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in lazy-loaded component:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="lazy-error">
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default LazyWrapper; 