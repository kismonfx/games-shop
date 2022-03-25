import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CartActions from "../actions/cart.action";
import { map, mergeMap, tap } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CartService } from "../../services/cart/cart.service";
import { CartItem } from "../../models/cartItem.model";

@Injectable({
  providedIn: "root"
})
export class CartEffects {

  getCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.getCart),
      mergeMap(() =>
        this.cartService.getCart().pipe(
          map((data: CartItem[]) => {
            return CartActions.getCartSuccess({
              cart: data
            });
          }),
        ),
      ),
    );
  });

  addProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addProduct),
      mergeMap(({ productId }) =>
        this.cartService.addProduct(productId).pipe(
          map((data) => {
            return CartActions.addProductSuccess({
              cartItem: data
            });
          }),
          tap(() => {
              this.snackBar.open("Товар добавлен в корзину", "ok", { duration: 3000 });
            },
          ),
        ),
      ),
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.deleteProduct),
      mergeMap(({ productId }) =>
        this.cartService.deleteProduct(productId).pipe(
          map((data) => {
            return CartActions.deleteProductSuccess({
              productId: data.productId
            });
          }),
          tap(() => {
              this.snackBar.open("Товар удален из корзины", "ok", { duration: 3000 });
            },
          ),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private snackBar: MatSnackBar,
  ) {
  }
}
