import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainApp from './components/MainApp';
import SideBarMenu from './components/sidebar/SideBarMenu';
import useWindowDimensions from './hooks/useWidth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
  },
]);

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div
      id='App'
      className={` bg-white flex font-poppins`}
      style={{ width: `${width}px`, height: `${height}` }}
    >
      <SideBarMenu />
      <div className='w-full'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
