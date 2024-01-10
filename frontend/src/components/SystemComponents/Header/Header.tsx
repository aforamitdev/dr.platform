import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { HeaderType } from '../../types';
import { useSystemContext } from '../../../context/SystemContext';

type Props = {
  name: string;
  isNumerical: boolean;
  icon: React.ReactNode;
  tabIndex: HeaderType;
};

const Header = (props: Props) => {
  const { dispatch } = useSystemContext();
  return (
    <div
      className='border w-full   rounded-sm bg-primary cursor-pointer'
      onClick={() => dispatch({ type: 'SET_TAB', payload: props.tabIndex })}
    >
      <div className='px-2 py-2'>
        <div className='flex text-white space-x-1 text-sm'>
          <div>{props.icon}</div>
          <div>{props.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
