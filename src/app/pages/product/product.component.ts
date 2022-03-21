import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {Product} from "../../models/product.model";
import {ActivatedRoute} from "@angular/router";
import {getProduct} from "../../store/actions/product.action";
import {Observable, takeUntil} from "rxjs";
import {selectCurrentProduct} from "../../store/selectors/product.selector";
import {environment} from "../../../environments/environment";
import {RxUnsubscribe} from "../../rx-unsubscribe";
import {selectFavouritesIds} from "../../store/selectors/favoutites.selector";
import {addFavourite, deleteFavourite} from "../../store/actions/favourites.action";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent extends RxUnsubscribe implements OnInit {

  product$?: Observable<Product | undefined>;
  id: string;
  apiURL = environment.apiURL;
  favouritesIds$?: Observable<any>;

  constructor(private store$: Store, private activateRoute: ActivatedRoute) {
    super();
    this.id = this.activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.store$.dispatch(getProduct({id: this.id}));
    this.product$ = this.store$.select(selectCurrentProduct);

    this.favouritesIds$ = this.store$.select(selectFavouritesIds);
  }

  addFavourite(): void {
    this.store$.dispatch(addFavourite({productId: this.id}));
  }

  deleteFavourite(): void {
    this.store$.dispatch(deleteFavourite({productId: this.id}));
  }

  getColor(rating?: number): string {
    if (!rating) {
      return "error";
    }
    if (rating >= 75) {
      return "#37a810";
    }
    if (rating >= 50) {
      return "#cec325";
    }
    if (rating >= 30) {
      return "#f7aa38";
    }
    return "#ec2f3e";
  }

}
