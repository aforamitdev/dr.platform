import React from 'react';
import Cpu from './Cpu/Cpu';
import Memory from './Memory/Memory';
import Disk from './Disk/Disk';
import Network from './Network/Network';
import System from './System/System';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAssistiveListeningSystems,
  faMicrochip,
  faGear,
  faMemory,
  faHardDrive,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';
import Header from './Header/Header';

type Props = {};

const SystemAtGlance = (props: Props) => {
  return (
    <div className='flex justify-between w-full space-x-4 '>
      <Header
        name='System'
        isNumerical
        icon={<FontAwesomeIcon icon={faGear} color='white' size='1x' />}
      />
      <Header
        name='Processor'
        isNumerical
        icon={<FontAwesomeIcon icon={faMicrochip} color='white' size='1x' />}
      />
      <Header
        name='Memory'
        isNumerical
        icon={<FontAwesomeIcon icon={faMemory} color='white' size='1x' />}
      />
      <Header
        name='Disk'
        isNumerical
        icon={<FontAwesomeIcon icon={faHardDrive} color='white' size='1x' />}
      />
      <Header
        name='Network'
        isNumerical
        icon={<FontAwesomeIcon icon={faNetworkWired} color='white' size='1x' />}
      />
      {/* <Cpu />
      <Memory />
      <Disk />
      <Network />
      <System /> */}
    </div>
  );
};

export default SystemAtGlance;
