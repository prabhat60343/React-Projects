// src/main.jsx
import { StrictMode } from 'react'; // Importing StrictMode for highlighting potential problems in the application
import { createRoot } from 'react-dom/client'; // Importing createRoot to enable the new root API
import App from './App.jsx'; // Importing the main App component

// Creating a root for the React application
ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
