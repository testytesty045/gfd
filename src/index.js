import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Function to check if stylesheets are loaded
const areStylesheetsLoaded = () => {
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.getAttribute('href').includes('.css') && !link.sheet) {
      return false;
    }
  }
  return true;
};

// Function to render the app
const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
};

// Check if stylesheets are loaded
if (areStylesheetsLoaded()) {
  renderApp();
} else {
  // If stylesheets aren't loaded yet, wait for them
  window.addEventListener('load', renderApp);
  
  // Fallback if load event doesn't fire
  setTimeout(renderApp, 1000);
}