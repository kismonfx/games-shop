import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "../../models/product.model";
import { selectFavourites } from "../../store/selectors/favoutites.selector";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.less"]
})
export class FavouritesComponent implements OnInit {

  favourites$: Observable<Product[]> | undefined;

  constructor(private store$: Store) {
  }

  ngOnInit(): void {
    this.getFavourites();
  }

  getFavourites(): void{
    this.favourites$ = this.store$.select(selectFavourites);
  }

}
