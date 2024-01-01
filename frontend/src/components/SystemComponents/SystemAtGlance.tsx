import React from 'react';
import Cpu from './Cpu/Cpu';
import Memory from './Memory/Memory';
import Disk from './Disk/Disk';
import Network from './Network/Network';

type Props = {};

const SystemAtGlance = (props: Props) => {
  return (
    <div className='flex justify-between w-full space-x-4 '>
      <Cpu />
      <Memory />
      <Disk />
      <Network />
    </div>
  );
};

export default SystemAtGlance;
