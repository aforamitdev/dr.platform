import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {};

const SideBarMenu = (props: Props) => {
  return (
    <div className='bg-gray-200 w-44 flex justify-center '>
      <div className=' '>
        <FontAwesomeIcon icon={faSliders} size='lg' />
      </div>
    </div>
  );
};

export default SideBarMenu;
