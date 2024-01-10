import React, { useEffect, useState } from 'react';
import {
  GetCpuUses,
  GetPhysicalCount,
} from '../../../../wailsjs/go/systeminfo/CpuInfo';
import { cpu } from '../../../../wailsjs/go/models';

type Props = {};

const ProcessorView = (props: Props) => {
  const [cpuStats, setCupStats] = useState<cpu.InfoStat[] | null>(null);
  const [cpuUses, setCpuUses] = useState<number[] | null>(null);
  useEffect(() => {
    GetPhysicalCount(true).then((e) => setCupStats(e));
    GetCpuUses().then((e) => setCpuUses(e));
  }, []);

  return (
    <div>
      {cpuStats?.map((e) => {
        return (
          <div className='text-xs'>
            {e.modelName} {e.vendorId} {e.coreId} {e.model} {e.microcode}
          </div>
        );
      })}
      {JSON.stringify(cpuUses)}
    </div>
  );
};

export default ProcessorView;
