import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "../../models/product.model";
import { ActivatedRoute } from "@angular/router";
import { getProduct } from "../../store/actions/product.action";
import { Observable } from "rxjs";
import { selectCurrentProduct } from "../../store/selectors/product.selector";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  product$?: Observable<Product | undefined>;
  id: string;
  apiURL = environment.apiURL;

  constructor(private store$: Store, private activateRoute: ActivatedRoute) {
    this.id = this.activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.store$.dispatch(getProduct({ id: this.id }));
    this.product$ = this.store$.select(selectCurrentProduct);
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
