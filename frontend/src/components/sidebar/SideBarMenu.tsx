import { faGear, faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {};

const SideBarMenu = (props: Props) => {
  return (
    <div className='bg-gray-200'>
      <div className='py-10 space-y-4 w-16 flex h-screen flex-col items-center'>
        <div className='btn-side'>
          <FontAwesomeIcon icon={faSliders} size='1x' color='white' />
        </div>
        <div className=' btn-side'>
          <FontAwesomeIcon icon={faGear} size='1x' color='white' />
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
