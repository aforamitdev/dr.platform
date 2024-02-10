import React, { Children } from 'react';

type Props = {
  children: React.ReactNode;
};

function Icon({ children }: Props) {
  return (
    <div className='hover:tw-bg-teal-100 tw-py-1 tw-px-1 tw-rounded-sm tw-cursor-pointer'>
      {children}
    </div>
  );
}

export default Icon;
