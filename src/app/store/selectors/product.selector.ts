import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, ProductState } from "../state/product.state";

export const selectProductState = createFeatureSelector<ProductState>("products");

const {
  selectAll,
} = adapter.getSelectors();

export const selectProducts = createSelector(
  selectProductState,
  selectAll,
);

export const selectCurrentProduct = createSelector(
  selectProductState,
  (state) => state.entities[state.selectedProductId],
);


