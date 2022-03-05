import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../models/product.model";
import { Store } from "@ngrx/store";
import { getProducts } from "../../store/selectors/product.selector";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.less"]
})
export class FavouritesComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private store$: Store) {
    this.products$ = this.store$.select(getProducts);
  }

  ngOnInit(): void {
  }

}
