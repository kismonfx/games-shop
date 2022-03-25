import { Component, OnInit } from "@angular/core";
import { CartItem } from "../../models/cartItem.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCart } from "../../store/selectors/cart,selector";
import { environment } from "../../../environments/environment";
import { minusQuantity, plusQuantity, deleteProduct } from "../../store/actions/cart.action";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.less"]
})
export class CartComponent implements OnInit {

  apiURL = environment.apiURL;
  cart$: Observable<CartItem[]> | undefined;

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.cart$ = this.store$.select(selectCart);
  }

  getTotal(cart: CartItem[] | null): number {
    if (!cart){
      return 0;
    }

    let total = 0;
    for (const cartItem of cart){
      total += cartItem.product.price * cartItem.quantity;
    }
    return total;
  }

  deleteProduct(productId: string): void{
    this.store$.dispatch(deleteProduct({ productId }));
  }

  plusQuantity(productId: string): void {
    this.store$.dispatch(plusQuantity({ productId }));
  }
  minusQuantity(productId: string): void {
    this.store$.dispatch(minusQuantity({ productId }));
  }

}
