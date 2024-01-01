import React, { useEffect, useState } from 'react';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  GetCpuUses,
  GetPhysicalCount,
} from '../../../../wailsjs/go/systeminfo/CpuInfo.js';
import { EventsOn } from '../../../../wailsjs/runtime/runtime.js';

type Props = {};

function Cpu({}: Props) {
  const [cpu, setCpu] = useState({});
  useEffect(() => {
    GetCpuUses().then((e) => console.log(e));
    GetPhysicalCount(true)
      .then((e) => console.log(e))
      .then((e) => console.log(e));

    EventsOn('cpu_uses', (e) => {
      console.log(e);
    });
  }, []);
  return (
    <div className='border w-full   rounded-xl bg-primary'>
      <div className='px-2 py-2'>
        <div className='flex text-white space-x-1 text-sm'>
          <div>
            <FontAwesomeIcon icon={faMicrochip} color='white' size='1x' />
          </div>
          <div>Processor</div>
          <div>as</div>
        </div>
      </div>
    </div>
  );
}

export default Cpu;
