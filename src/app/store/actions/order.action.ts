import { createAction, props } from "@ngrx/store";
import { Order } from "../../models/order.model";
import { Update } from "@ngrx/entity";

export enum EOrderActions{
  GET_ORDERS = "[Order] Get Orders",
  GET_ORDERS_SUCCESS = "[Order] Get Orders Success",

  DELETE_ORDER = "[Order] Delete Order",
  DELETE_ORDER_SUCCESS = "[Order] Delete Order Success",

  ADD_ORDER = "[Order] Add Order",
  ADD_ORDER_SUCCESS = "[Order] Add Order Success",

  UPDATE_ORDER = "[Order] Update Order",
  UPDATE_ORDER_SUCCESS = "[Order] Update Order Success",
}

export const getOrders = createAction(EOrderActions.GET_ORDERS);
export const getOrdersSuccess = createAction(EOrderActions.GET_ORDERS_SUCCESS, props<{ orders: Order[] }>());

export const addOrder = createAction(EOrderActions.ADD_ORDER, props<{ order: Order }>());
export const addOrderSuccess = createAction(EOrderActions.ADD_ORDER_SUCCESS, props<{ order: Order }>());

export const deleteOrder = createAction(EOrderActions.DELETE_ORDER, props<{ orderId: string }>());
export const deleteOrderSuccess = createAction(EOrderActions.DELETE_ORDER_SUCCESS, props<{ orderId: string }>());

export const updateOrder = createAction(EOrderActions.UPDATE_ORDER, props<{ orderId: string, order: Order }>());
export const updateOrderSuccess = createAction(EOrderActions.UPDATE_ORDER_SUCCESS, props<{ updatedOrder: Update<Order> }>());
