import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, CartState } from "../state/cart.state";

export const selectCartState = createFeatureSelector<CartState>("cart");

const {
  selectAll,
  selectIds,
} = adapter.getSelectors();

export const selectCart = createSelector(
  selectCartState,
  selectAll,
);

export const selectCartIds = createSelector(
  selectCartState,
  selectIds,
);

export const selectCartCount = createSelector(
  selectCartState,
  (state) => state.ids.length,
);
