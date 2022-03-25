import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { logout } from "../../../store/actions/auth.action";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../../../components/dialog/dialog.component";
import { Observable, takeUntil } from "rxjs";
import { RxUnsubscribe } from "../../../rx-unsubscribe";
import { getFavourites } from "../../../store/actions/favourites.action";
import { selectFavouritesCount } from "../../../store/selectors/favoutites.selector";
import { getProducts } from "../../../store/actions/product.action";
import { getCart } from "../../../store/actions/cart.action";
import { selectCartCount } from "../../../store/selectors/cart,selector";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.less"]
})
export class ShopComponent extends RxUnsubscribe implements OnInit {

  constructor(private store$: Store, public dialog: MatDialog) {
    super();
  }

  favouritesCount$: Observable<number> = this.store$.select(selectFavouritesCount);
  cartCount$: Observable<number> = this.store$.select(selectCartCount);

  ngOnInit(): void {
    this.store$.dispatch(getFavourites());
    this.store$.dispatch(getProducts({ platform: "", genre: "" }));
    this.store$.dispatch(getCart());
  }

  logout(): void{
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: "Выход",
        dialog: "Вы действительно хотите выйти из системы?"
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (result) => {
          if (result === "true") {
            this.store$.dispatch(logout());
          }
        },
      );
  }

}
