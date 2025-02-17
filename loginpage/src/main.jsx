import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';           // Ensure CSS is correctly imported
import LoginApp from './App.jsx'; // Adjust to your main component file

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginApp />
  </StrictMode>,
);
