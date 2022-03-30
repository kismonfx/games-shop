import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable, takeUntil } from "rxjs";
import { Order } from "../../models/order.model";
import { Store } from "@ngrx/store";
import { selectOrders } from "../../store/selectors/order.selector";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../../components/dialog/dialog.component";
import { RxUnsubscribe } from "../../rx-unsubscribe";
import { deleteOrder, updateOrder } from "../../store/actions/order.action";
import { isAdmin } from "../../store/selectors/auth.selector";
import { OrderFormComponent } from "../../components/order-form/order-form.component";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.less"]
})
export class OrdersComponent extends RxUnsubscribe implements OnInit {

  apiURL = environment.apiURL;
  orders$: Observable<Order[]> | undefined;
  isAdmin$: Observable<boolean | undefined> = this.store$.select(isAdmin);

  constructor(public dialog: MatDialog, private store$: Store) {
    super();
  }

  ngOnInit(): void {
    this.orders$ = this.store$.select(selectOrders);
  }

  deleteOrder(orderId?: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: "Удаление заказа",
        dialog: `Вы действительно хотите удалить заказ №${orderId}?`
      }
    });
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (result) => {
          if (result === "true") {
            this.store$.dispatch(deleteOrder({ orderId: orderId ?? "" }));
          }
        },
      );
  }

  updateOrder(order: Order): void {
    const dialogRef = this.dialog.open(OrderFormComponent, {
      data: {
        id: order._id,
        status: order.status
      }
    });
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (newStatus) => {
          if (newStatus) {
            const updatedOrder: Order = {
              status: newStatus
            };
            this.store$.dispatch(updateOrder({ orderId: order._id ?? "", order: updatedOrder }));
          }
        },
      );
  }
}
