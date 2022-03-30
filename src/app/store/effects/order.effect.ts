import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MatSnackBar } from "@angular/material/snack-bar";
import { OrderService } from "../../services/order/order.service";
import * as OrderActions from "../actions/order.action";
import { map, mergeMap, tap } from "rxjs";
import { Order } from "../../models/order.model";
import { Update } from "@ngrx/entity";

@Injectable({
  providedIn: "root"
})
export class OrderEffects {

  getOrders$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(OrderActions.getOrders),
        mergeMap(() =>
          this.orderService.getAllOrders().pipe(
            map((data: Order[]) => {
              return OrderActions.getOrdersSuccess({
                orders: data
              });
            }),
          ),
        ),
      );
    },
  );

  addOrder$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(OrderActions.addOrder),
        mergeMap(({ order }) =>
          this.orderService.addOrder(order).pipe(
            map((data: Order) => {
              return OrderActions.addOrderSuccess({
                order: data
              });
            }),
            tap(() => {
              this.snackBar.open("Заказ создан", "ok", { duration : 3000 });
            }),
          ),
        ),
      );
    },
  );

  deleteOrder$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(OrderActions.deleteOrder),
        mergeMap(({ orderId }) =>
          this.orderService.deleteOrder(orderId).pipe(
            map((data) => {
              return OrderActions.deleteOrderSuccess({
                orderId: data.orderId
              });
            }),
            tap(() => {
              this.snackBar.open("Заказ удален", "ok", { duration : 3000 });
            }),
          ),
        ),
      );
    },
  );

  updateOrder$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(OrderActions.updateOrder),
        mergeMap(({ orderId, order }) =>
          this.orderService.updateOrder(orderId, order).pipe(
            map((data: Order) => {
              const updatedOrder: Update<Order> = {
                id: data._id ?? "",
                changes: data,
              };
              return OrderActions.updateOrderSuccess({
                updatedOrder
              });
            }),
            tap(() => {
                this.snackBar.open("Заказ изменен", "ok", { duration : 3000 });
              },
            ),
          ),
        ),
      );
    },
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private snackBar: MatSnackBar,
  ){}
}


