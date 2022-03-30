import { createReducer, on } from "@ngrx/store";
import * as CartAction from "../actions/cart.action";
import { adapter, CartState } from "../state/cart.state";

export const initialState: CartState = adapter.getInitialState({});

export const cartReducer = createReducer(
  initialState,

  on(CartAction.getCartSuccess, (state, { cart }) => {
    return adapter.setAll(cart, state);
  }),

  on(CartAction.addProductSuccess, (state, { cartItem }) => {
    return adapter.addOne(cartItem, state);
  }),

  on(CartAction.deleteProductSuccess, (state, { productId }) => {
    return adapter.removeOne(productId, state);
  }),

  on(CartAction.plusQuantity, (state, { productId }) => {
    return adapter.updateOne({
      id: productId,
      changes: { ...state.entities[productId], quantity: state.entities[productId]!.quantity + 1 },
    }, state);
  }),

  on(CartAction.minusQuantity, (state, { productId }) => {
    return adapter.updateOne({
      id: productId,
      changes: { ...state.entities[productId], quantity: state.entities[productId]!.quantity - 1 },
    }, state);
  }),

  on(CartAction.clearCartSuccess, (state) => {
    return adapter.removeAll(state);
  }),

);
