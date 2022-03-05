import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "../../models/product.model";
import { getProducts } from "../../store/selectors/product.selector";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.less"]
})
export class CatalogComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private store$: Store) {
    this.products$ = this.store$.select(getProducts);
  }


  ngOnInit(): void {
  }

}
