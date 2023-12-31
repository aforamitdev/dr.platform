import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainApp from './components/MainApp';
import SideBarMenu from './components/sidebar/SideBarMenu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
  },
]);

function App() {
  return (
    <div id='App' className='bg-white h-screen flex w-screen '>
      <SideBarMenu />
      <div>
        <div>{}</div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
