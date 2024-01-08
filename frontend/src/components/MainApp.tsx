import React, { useEffect, useState } from 'react';
import { GetHostInfo } from '../../wailsjs/go/systeminfo/HostInfo.js';
import SystemPanel from './SystemInfo/SystemPanel.js';
import SystemAtGlance from './SystemComponents/SystemAtGlance.js';
import { useSystemContext } from '../context/SystemContext.js';
type Props = {};

const MainApp = (props: Props) => {
  const [test, setTest] = useState<any>({});
  const { state } = useSystemContext();
  useEffect(() => {
    GetHostInfo().then((e) => setTest(e));
  }, []);

  return (
    <div className='px-10 py-5 w-full'>
      {JSON.stringify(state)}
      <SystemAtGlance />
      {/* selected tab info  */}
      <SystemPanel />
    </div>
  );
};

export default MainApp;
