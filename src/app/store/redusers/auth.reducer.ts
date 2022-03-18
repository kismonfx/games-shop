import { AuthState } from "../state/auth.state";
import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "../actions/auth.action";

export const initialState: AuthState = {
  authData: null
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, (state, action) => ({ ...state, authData: action.authData })),

  on(AuthActions.registrationSuccess, (state, action) => ({ ...state, authData: action.authData })),

  on(AuthActions.logoutSuccess, (state) => ({ ...state, authData: null })),
);


