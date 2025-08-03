// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// This is the main entry file for your React application.
// It imports the root component (App) and renders it into the
// 'root' element in your index.html file.

console.log("Attempting to find the root element...");
const rootElement = document.getElementById('root');

if (rootElement) {
  console.log("Root element found. Starting React application rendering.");
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React application successfully rendered.");
  } catch (error) {
    console.error("An error occurred during React rendering:", error);
  }
} else {
  console.error("Failed to find the root element to mount the React application. Is the 'root' div present in index.html?");
}
