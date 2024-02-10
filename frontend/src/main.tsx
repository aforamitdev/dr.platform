import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './out.css';

import App from './App';
import AppContextProvider from './providers/AppProvider';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
