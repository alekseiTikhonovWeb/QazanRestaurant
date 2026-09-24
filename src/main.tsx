import React from 'react';
import ReactDOM from 'react-dom/client';
// Self-hosted fonts: no request to Google Fonts, no third-party tracking.
import '@fontsource-variable/manrope';
import '@fontsource-variable/playfair-display';
import '@fontsource-variable/playfair-display/wght-italic.css';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
