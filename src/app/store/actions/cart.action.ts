import { createAction, props } from "@ngrx/store";
import { CartItem } from "../../models/cartItem.model";

export enum ECartActions{
  GET_CART = "[Cart] Get Cart",
  GET_CART_SUCCESS = "[Cart] Get Cart Success",

  ADD_PRODUCT = "[Cart] Add Product",
  ADD_PRODUCT_SUCCESS = "[Cart] Add Product Success",

  DELETE_PRODUCT = "[Cart] Delete Product",
  DELETE_PRODUCT_SUCCESS = "[Cart] Delete Product Success",

  PLUS_QUANTITY = "[Cart] Plus Quantity",
  MINUS_QUANTITY = "[Cart] Minus Quantity"
}

export const getCart = createAction(ECartActions.GET_CART);
export const getCartSuccess = createAction(ECartActions.GET_CART_SUCCESS, props<{ cart: CartItem[] }>());

export const addProduct = createAction(ECartActions.ADD_PRODUCT, props<{ productId: string }>());
export const addProductSuccess = createAction(ECartActions.ADD_PRODUCT_SUCCESS, props<{ cartItem: CartItem }>());

export const deleteProduct = createAction(ECartActions.DELETE_PRODUCT, props<{ productId: string }>());
export const deleteProductSuccess = createAction(ECartActions.DELETE_PRODUCT_SUCCESS, props<{ productId: string }>());

export const plusQuantity = createAction(ECartActions.PLUS_QUANTITY, props<{ productId: string }>());
export const minusQuantity = createAction(ECartActions.MINUS_QUANTITY, props<{ productId: string }>());
