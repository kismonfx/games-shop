import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../state/auth.state";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const getAuthData = createSelector(
  selectAuthState,
  (state) => state.authData,
);


