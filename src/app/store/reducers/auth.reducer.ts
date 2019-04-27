import { AuthActions, signOut, signOutCompleted } from '../actions/auth.actions';


export interface State {
}

export const initialState: State = {
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case signOut.type:
      return { ...state };

    case signOutCompleted.type:
      return { ...state };

    default:
      return state;
  }
}
