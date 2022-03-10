import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";
import { Store } from "@ngrx/store";
import { deleteProduct, updateProduct } from "../../store/actions/product.action";
import { RxUnsubscribe } from "../../rx-unsubscribe";
import { takeUntil } from "rxjs";
import { ProductFormComponent } from "../product-form/product-form.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-catalog-item",
  templateUrl: "./catalog-item.component.html",
  styleUrls: ["./catalog-item.component.less"]
})
export class CatalogItemComponent extends RxUnsubscribe implements OnInit {

  @Input() product!: Product;
  @Input() isFavourite!: boolean;

  constructor(public dialog: MatDialog, private store$: Store, private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  openDeleteForm(): void{
    const dialogRef = this.dialog.open(DialogComponent, { data: this.product.title });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      (result) => {
        if (result === "true") {
          this.store$.dispatch(deleteProduct({ id: this.product._id ?? "" }));
        }
      },
    );
  }

  openUpdateForm(): void{
    const formRef = this.dialog.open(ProductFormComponent, { data: this.product });

    formRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (updatedProduct) => {
          if (updatedProduct){
            this.store$.dispatch(updateProduct({ id: this.product._id ?? "", product: updatedProduct }));
          }
        },
      );
  }

}
