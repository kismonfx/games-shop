import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as FavouritesActions from "../actions/favourites.action";
import { map, mergeMap, tap } from "rxjs";
import { Product } from "../../models/product.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FavouritesService } from "../../services/favourites/favourites.service";


@Injectable({
  providedIn: "root"
})
export class FavouritesEffects {

  getFavourites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FavouritesActions.getFavourites),
      mergeMap(() =>
        this.favouritesService.getFavourites().pipe(
          map((data: Product[]) => {
            return FavouritesActions.getFavouritesSuccess({
              favourites: data
            });
          }),
        ),
      ),
    );
  });

  addFavourite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FavouritesActions.addFavourite),
      mergeMap(({ productId }) =>
        this.favouritesService.addFavourite(productId).pipe(
          map((data) => {
            return FavouritesActions.addFavouriteSuccess({
              favourite: data
            });
          }),
          tap(() => {
              this.snackBar.open("Товар добавлен в избранное", "ok", { duration: 3000 });
            },
          ),
        ),
      ),
    );
  });

  deleteFavourite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FavouritesActions.deleteFavourite),
      mergeMap(({ productId }) =>
        this.favouritesService.deleteFavourite(productId).pipe(
          map((data) => {
            return FavouritesActions.deleteFavouriteSuccess({
              productId: data.productId
            });
          }),
          tap(() => {
              this.snackBar.open("Товар удален из избранного", "ok", { duration: 3000 });
            },
          ),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private favouritesService: FavouritesService,
    private snackBar: MatSnackBar,
  ) {
  }
}
