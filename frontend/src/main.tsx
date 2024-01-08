import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { SystemContextProvider } from './context/SystemContext';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <SystemContextProvider>
      <App />
    </SystemContextProvider>
  </React.StrictMode>
);
