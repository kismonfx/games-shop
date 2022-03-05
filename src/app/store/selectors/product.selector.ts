import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../state/product.state";

export const state = createFeatureSelector<ProductState>("products");

export const getProducts = createSelector(state, (state) => {
  return state.products;
});

export const getProductById = (id: number) => createSelector(state, (state) => {
  return state.products.find((product) => product.id === id);
});
