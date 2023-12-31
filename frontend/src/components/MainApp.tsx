import React, { useState } from 'react';
import { GetHostInfo } from '../../wailsjs/go/systeminfo/HostInfo.js';
type Props = {};

const MainApp = (props: Props) => {
  const [test, setTest] = useState<any>({});

  GetHostInfo().then((e) => setTest(e));

  return <div>MainApp {JSON.stringify(test)}</div>;
};

export default MainApp;
