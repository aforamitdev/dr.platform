import React from 'react';
import { useSystemContext } from '../../context/SystemContext';
import { HeaderType } from '../types';
import ProcessorView from '../SystemComponents/Cpu/ProcessorView';
import MemoryView from '../SystemComponents/Memory/MemoryView';
import NetworkView from '../SystemComponents/Network/NetworkView';
import DiskView from '../SystemComponents/Disk/DiskView';
import SystemView from './SystemView';

type Props = {};

const SystemPanel = (props: Props) => {
  const { state } = useSystemContext();

  switch (state.currentHeaderIndex) {
    case HeaderType.PROCESSOR:
      return <ProcessorView />;
      break;
    case HeaderType.MEMORY:
      return <MemoryView />;
      break;
    case HeaderType.NETWORK:
      return <NetworkView />;
    case HeaderType.DISK:
      return <DiskView />;
    case HeaderType.SYSTEM:
      return <SystemView />;
    default:
      break;
  }

  return <div>SystemPanel</div>;
};

export default SystemPanel;
