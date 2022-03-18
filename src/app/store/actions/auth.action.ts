import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";
import { AuthData } from "../../models/authData";

export enum EAuthActions{
  LOGIN = "[Auth] Login",
  LOGIN_SUCCESS = "[Auth] Login Success",

  REGISTRATION = "[Auth] Registration",
  REGISTRATION_SUCCESS = "[Auth] Registration Success",

  LOGOUT = "[Auth] Logout",
  LOGOUT_SUCCESS = "[Auth] Logout Success",
}

export const login = createAction(EAuthActions.LOGIN, props<{ user: User }>());
export const loginSuccess = createAction(EAuthActions.LOGIN_SUCCESS, props<{ authData: AuthData }>());

export const registration = createAction(EAuthActions.REGISTRATION, props<{ user: User }>());
export const registrationSuccess = createAction(EAuthActions.REGISTRATION_SUCCESS, props<{ authData: AuthData }>());

export const logout = createAction(EAuthActions.LOGOUT);
export const logoutSuccess = createAction(EAuthActions.LOGOUT_SUCCESS);
