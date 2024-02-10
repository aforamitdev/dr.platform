import React, { useEffect, useState } from 'react';
import { GetCpuInfo } from '../../../wailsjs/go/system/System.js';
import GraphContainer from './graphs/GraphContainer.js';
import { Card } from 'react-bootstrap';
import DHeader from './Dheader/DHeader.js';
import ProcessorsIcon from '../icons/headers/ProcessorsIcon.js';
import RamIcon from '../icons/headers/RamIcon.js';
type Props = {};

const Index = (props: Props) => {
  return (
    <div className='tw-px-7 tw-py-3 tw-w-full'>
      <div className='tw-flex tw-w-full tw-justify-between tw-space-x-4 tw-pb-4'>
        <Card style={{ height: '14vh', width: '100%' }}>
          <DHeader name='Processors' logo={<ProcessorsIcon />} />
        </Card>
        <Card style={{ height: '14vh', width: '100%' }}>
          <DHeader name='RAM' logo={<RamIcon />} />
        </Card>
        <Card style={{ height: '14vh', width: '100%' }}>
          <DHeader name='Network' logo={<ProcessorsIcon />} />
        </Card>
        <Card style={{ height: '14vh', width: '100%' }}>
          <DHeader name='GPU' logo={<ProcessorsIcon />} />
        </Card>
      </div>
      <div className='tw-flex tw-space-x-4'>
        <Card style={{ height: '55vh', width: '100%' }} />
        <Card style={{ height: '55vh', width: '100%' }} />
      </div>
      <GraphContainer />
    </div>
  );
};

export default Index;
