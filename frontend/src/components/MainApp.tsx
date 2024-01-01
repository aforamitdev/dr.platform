import React, { useState } from 'react';
import { GetHostInfo } from '../../wailsjs/go/systeminfo/HostInfo.js';
import SystemPanel from './SystemInfo/SystemPanel.js';
import SystemAtGlance from './SystemComponents/SystemAtGlance.js';
type Props = {};

const MainApp = (props: Props) => {
  const [test, setTest] = useState<any>({});

  GetHostInfo().then((e) => setTest(e));

  return (
    <div className='px-10 py-5 w-full'>
      <SystemAtGlance />
      <SystemPanel />
    </div>
  );
};

export default MainApp;
