export type AppState = {};
// action type
export type ActionType = {
  type: 'SET_PRODUCT_STATUS';
  payload: any;
};

export const initialState: AppState = {};

export function reducer(state: AppState, action: ActionType): AppState {
  switch (action.type) {
    case 'SET_PRODUCT_STATUS':
      return state;
    default:
      return state;
  }
}
