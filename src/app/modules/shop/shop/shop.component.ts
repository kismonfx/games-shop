import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { logout } from "../../../store/actions/auth.action";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../../../components/dialog/dialog.component";
import { takeUntil } from "rxjs";
import { RxUnsubscribe } from "../../../rx-unsubscribe";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.less"]
})
export class ShopComponent extends RxUnsubscribe implements OnInit {

  constructor(private store$: Store, public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
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
