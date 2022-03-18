import { ActionReducerMap } from "@ngrx/store";
import { ProductState } from "./state/product.state";
import { productReducer } from "./redusers/product.reducer";
import { AuthState } from "./state/auth.state";
import { authReducer } from "./redusers/auth.reducer";

export interface AppState{
  products: ProductState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer,
  auth: authReducer
};
