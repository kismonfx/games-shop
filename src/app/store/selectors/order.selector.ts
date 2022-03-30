import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, OrderState } from "../state/order.state";

export const selectOrderState = createFeatureSelector<OrderState>("order");

const {
  selectAll,
} = adapter.getSelectors();

export const selectOrders = createSelector(
  selectOrderState,
  selectAll,
);
