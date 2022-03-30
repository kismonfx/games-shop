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
import { getOrders } from "../../../store/actions/order.action";
import { getAuthData } from "../../../store/selectors/auth.selector";
import { AuthData } from "../../../models/authData";
import { UserInfoComponent } from "../../../components/user-info/user-info.component";

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
  authData$: Observable<AuthData | null> = this.store$.select(getAuthData);

  ngOnInit(): void {
    this.store$.dispatch(getFavourites());
    this.store$.dispatch(getProducts({ platform: "", genre: "" }));
    this.store$.dispatch(getCart());
    this.store$.dispatch(getOrders());
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

  showUserInfo(authData: AuthData | null): void {
    if (authData) {
      this.dialog.open(UserInfoComponent, {
        data: {
          username: authData.username,
          isAdmin: authData.isAdmin
        }
      });
    }
  }

}
