import { createReducer, on } from "@ngrx/store";
import { adapter, OrderState } from "../state/order.state";
import * as OrderActions from "../actions/order.action";

export const initialState: OrderState = adapter.getInitialState({});

export const orderReducer = createReducer(
  initialState,

  on(OrderActions.getOrdersSuccess, (state, { orders }) => {
    return adapter.setAll(orders, state);
  }),

  on(OrderActions.addOrderSuccess, (state, { order }) => {
    return adapter.addOne(order, state);
  }),

  on(OrderActions.deleteOrderSuccess, (state, { orderId }) => {
    return adapter.removeOne(orderId, state);
  }),

  on(OrderActions.updateOrderSuccess, (state, { updatedOrder }) => {
    return adapter.updateOne(updatedOrder, state);
  }),
);
