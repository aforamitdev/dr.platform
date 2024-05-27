import React, { useEffect } from 'react';
import { GetMemoryInfo } from '../../../../../wailsjs/go/system/System';

type Props = {};

function RamGraph({}: Props) {
  useEffect(() => {
    GetMemoryInfo().then((e) => {
      console.log(e);
    });
  }, []);

  return <div>RamGraph </div>;
}

export default RamGraph;
