import React, { useEffect, useState } from 'react';
import { GetHostInfo } from '../../wailsjs/go/systeminfo/HostInfo.js';
import SystemPanel from './SystemInfo/SystemPanel.js';
import SystemAtGlance from './SystemComponents/SystemAtGlance.js';
import { useSystemContext } from '../context/SystemContext.js';
type Props = {};

const MainApp = (props: Props) => {
  const { state } = useSystemContext();
  useEffect(() => {}, []);

  return (
    <div className='px-10 py-5 w-full'>
      <SystemAtGlance />
      {/* selected tab info  */}
      <SystemPanel />
    </div>
  );
};

export default MainApp;
