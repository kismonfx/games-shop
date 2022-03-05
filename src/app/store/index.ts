import { ActionReducerMap } from "@ngrx/store";
import { ProductState } from "./state/product.state";
import { productReducer } from "./redusers/product.reducer";

export interface AppState{
  products: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer
};
