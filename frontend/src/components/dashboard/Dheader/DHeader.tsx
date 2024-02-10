import React from 'react';

type Props = {
  name: string;
  logo: React.ReactElement;
};

const DHeader = (props: Props) => {
  return (
    <div className='tw-h-full tw-w-full tw-px-2 tw-py-2'>
      <div className='tw-flex tw-items-center tw-space-x-1'>
        {props.logo}
        <div className='tw-text-xs tw-font-semibold'>{props.name}</div>
      </div>
    </div>
  );
};

export default DHeader;
