import React, { FC } from 'react';
import createCtx from './ctx';

type Props = {};

export const [useAppContext, AppContextProvider] = createCtx();

const AppProvider: FC = (props: Props) => {
  return <div></div>;
};

export default AppContextProvider;
