import { HeaderType, System } from '../components/types';

export const systemState: System = {
  currentHeaderIndex: HeaderType.SYSTEM,
};

export type Actions = { type: 'SET_TAB'; payload: HeaderType };

export function reducer(state: System, action: Actions): System {
  switch (action.type) {
    case 'SET_TAB':
      return {
        ...state,
        currentHeaderIndex: action.payload,
      };

    default:
      return state;
  }

  return state;
}
