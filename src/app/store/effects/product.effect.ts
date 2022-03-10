import { ProductService } from "../../services/product/product.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, tap } from "rxjs";
import { Product } from "../../models/product.model";
import * as ProductActions from "../actions/product.action";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Update } from "@ngrx/entity";

@Injectable({
  providedIn: "root"
})
export class ProductEffects {

  getProducts$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.getProducts),
        mergeMap(() =>
          this.productService.getAllProducts().pipe(
            map((data: Product[]) => {
              return ProductActions.getProductsSuccess({
                products: data
              });
            }),
          ),
        ),
      );
    },
  );

  getProduct$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.getProduct),
        mergeMap(({ id }) =>
          this.productService.getOneProduct(id).pipe(
            map((data: Product) => {
              return ProductActions.getProductSuccess({
                product: data
              });
            }),
          ),
        ),
      );
    },
  );

  deleteProduct$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.deleteProduct),
        mergeMap(({ id }) =>
          this.productService.deleteProduct(id).pipe(
            map(() => {
              return ProductActions.deleteProductSuccess({
                id
              });
            }),
            tap(() => {
              this.snackBar.open("Товар удален", "ok", { duration : 3000 });
              },
            ),
          ),
        ),
      );
    },
  );

  addProduct$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.addProduct),
        mergeMap(({ product }) =>
          this.productService.addProduct(product).pipe(
            map((data: Product) => {
              return ProductActions.addProductSuccess({
                product: data
              });
            }),
            tap(() => {
                this.snackBar.open("Товар добавлен", "ok", { duration : 3000 });
              },
            ),
          ),
        ),
      );
    },
  );

  updateProduct$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.updateProduct),
        mergeMap(({ id, product }) =>
          this.productService.updateProduct(id, product).pipe(
            map((data: Product) => {
              const updatedProduct: Update<Product> = {
                id: data._id,
                changes: data,
              };
              return ProductActions.updateProductSuccess({
                update: updatedProduct
              });
            }),
            tap(() => {
                this.snackBar.open("Товар изменен", "ok", { duration : 3000 });
              },
            ),
          ),
        ),
      );
    },
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private snackBar: MatSnackBar,
  ){}
}
