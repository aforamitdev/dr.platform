import React, { Dispatch, createContext, useContext, useReducer } from 'react';
import { System } from '../components/types';
import { Actions, reducer, systemState } from './systemreducer';

export const SystemContext = createContext<{
  state: System;
  dispatch: Dispatch<Actions>;
}>({ state: systemState, dispatch: () => {} });

export const SystemContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, systemState);
  if (state && dispatch) {
    return (
      <SystemContext.Provider value={{ state: state, dispatch: dispatch }}>
        {children}
      </SystemContext.Provider>
    );
  }
  return <div>Error loading state....</div>;
};

export const useSystemContext = () => useContext(SystemContext);
