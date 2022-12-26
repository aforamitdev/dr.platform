import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Index';
import Settings from './pages/settings/Index';

const container = document.getElementById('root');

const root = createRoot(container!);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
