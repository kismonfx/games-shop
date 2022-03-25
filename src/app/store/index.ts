import { ActionReducerMap } from "@ngrx/store";
import { ProductState } from "./state/product.state";
import { productReducer } from "./redusers/product.reducer";
import { AuthState } from "./state/auth.state";
import { authReducer } from "./redusers/auth.reducer";
import { FavouritesState } from "./state/favourites.state";
import { favouritesReducer } from "./redusers/favourites.reducer";
import { CartState } from "./state/cart.state";
import { cartReducer } from "./redusers/cart.reducer";

export interface AppState{
  products: ProductState;
  auth: AuthState;
  favourites: FavouritesState;
  cart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer,
  auth: authReducer,
  favourites: favouritesReducer,
  cart: cartReducer

};
