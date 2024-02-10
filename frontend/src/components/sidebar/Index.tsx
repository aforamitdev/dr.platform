import React from 'react';
import DashboardIcon from '../icons/Icon';
import Icon from '../icons/Icon';
import Dashboard from '../icons/Dashboard';
import Log from '../icons/Log';

type Props = {};

const Index = (props: Props) => {
  return (
    <div className='h-100 tw-w-14 tw-bg-gray-300 tw-justify-center '>
      <div className='tw-bg-black'>as</div>

      <div className='tw-pt-10 tw-flex tw-justify-center   '>
        <div className=' tw-text-gray-500 tw-space-y-3'>
          <Icon>
            <Dashboard />
          </Icon>
          <Icon>
            <Log />
          </Icon>
        </div>
      </div>
    </div>
  );
};

export default Index;
