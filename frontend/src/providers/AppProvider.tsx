import React, {
  Dispatch,
  ReactNode,
  useReducer,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { AppState, reducer } from './reducer';

export const AppContext = createContext<AppState>({});

const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.displayName = 'AppContext';

export const useAppProvider = () => useContext(AppContext);
export default AppContextProvider;
