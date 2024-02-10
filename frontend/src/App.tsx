import { useEffect, useState } from 'react';
import Dashboard from './components/dashboard/Index.js';
import SideBar from './components/sidebar/Index.js';
import './styles/components/layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id='App' style={{ height: '100vh' }}>
      <div className='tw-flex h-100 tw-via-gray-700 tw-bg-gray-100 '>
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
