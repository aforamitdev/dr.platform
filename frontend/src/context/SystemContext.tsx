import React, { Dispatch, createContext, useContext, useReducer } from 'react';
import { System } from '../components/types';
import { reducer, systemState } from './systemreducer';

export const SystemContext = createContext<
  | {
      state: System;
      dispatch: Dispatch<any>;
    }
  | any
>({});

export const SystemContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, systemState);

  return (
    <SystemContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </SystemContext.Provider>
  );
};

export const useSystemContext = () => useContext(SystemContext);
