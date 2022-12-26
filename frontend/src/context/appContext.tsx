import React, { createContext, useContext, useReducer } from 'react';

type Props = {};

const initialState = {};

export const AppContext = createContext<any>({});

const reducer = (state: any, action: any) => {
  return state;
};

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
