import { Component, OnInit } from "@angular/core";
import { CartItem } from "../../models/cartItem.model";
import { Observable, takeUntil } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCart } from "../../store/selectors/cart,selector";
import { environment } from "../../../environments/environment";
import { minusQuantity, plusQuantity, deleteProduct, clearCart } from "../../store/actions/cart.action";
import { Order } from "../../models/order.model";
import { addOrder } from "../../store/actions/order.action";
import { RxUnsubscribe } from "../../rx-unsubscribe";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../../components/dialog/dialog.component";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.less"]
})
export class CartComponent extends RxUnsubscribe implements OnInit {

  apiURL = environment.apiURL;
  cart$: Observable<CartItem[]> | undefined;

  constructor(public dialog: MatDialog, private store$: Store) {
    super();
  }

  ngOnInit(): void {
    this.cart$ = this.store$.select(selectCart);
  }

  getTotal(cart: CartItem[] | null): number {
    if (!cart) {
      return 0;
    }

    let total = 0;
    for (const cartItem of cart) {
      total += cartItem.product.price * cartItem.quantity;
    }
    return total;
  }

  deleteProduct(productId: string): void {
    this.store$.dispatch(deleteProduct({ productId }));
  }

  plusQuantity(productId: string): void {
    this.store$.dispatch(plusQuantity({ productId }));
  }

  minusQuantity(productId: string): void {
    this.store$.dispatch(minusQuantity({ productId }));
  }

  createOrder(cart: CartItem[] | null): void {
    if (cart) {
      const total = this.getTotal(cart);
      const order: Order = {
        cart,
        total
      };

      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          title: "Оформление заказа",
          dialog: `Вы действительно хотите оформить заказ?`
        }
      });
      dialogRef.afterClosed()
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (result) => {
            if (result === "true") {
              this.store$.dispatch(addOrder({ order }));
              this.store$.dispatch(clearCart());
            }
          },
        );
    }
  }


}
