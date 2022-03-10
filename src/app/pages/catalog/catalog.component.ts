import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, takeUntil } from "rxjs";
import { addProduct, getProducts } from "src/app/store/actions/product.action";
import { Product } from "../../models/product.model";
import { selectProducts } from "../../store/selectors/product.selector";
import { MatDialog } from "@angular/material/dialog";
import { ProductFormComponent } from "../../components/product-form/product-form.component";
import { RxUnsubscribe } from "../../rx-unsubscribe";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.less"]
})
export class CatalogComponent extends RxUnsubscribe implements OnInit {

  products$: Observable<Product[]> | undefined;

  constructor(public dialog: MatDialog, private store$: Store) {
    super();
  }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.store$.dispatch(getProducts());
    this.products$ = this.store$.select(selectProducts);
  }

  openAddForm(): void{
    const formRef = this.dialog.open(ProductFormComponent);

    formRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      (newProduct) => {
        if (newProduct){
          this.store$.dispatch(addProduct({ product: newProduct }));
        }
        },
    );

  }

}
