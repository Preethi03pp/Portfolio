import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './global.css';

// The main entry point of the React application.
// This file is responsible for rendering the entire app.

// Create a root instance for the React application.
// The createRoot function is a new API in React 18 for creating and managing a root.
// It targets the HTML element with the id 'root' in your index.html.
ReactDOM.createRoot(document.getElementById('root')).render(
  // Use React.StrictMode to enable extra checks and warnings for development.
  // This helps identify potential problems in your code.
  <React.StrictMode>
    {/* Render the main App component, which contains all other components. */}
    <App />
  </React.StrictMode>,
);
