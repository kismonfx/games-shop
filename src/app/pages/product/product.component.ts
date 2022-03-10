import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "../../models/product.model";
import { ActivatedRoute } from "@angular/router";
import { RxUnsubscribe } from "../../rx-unsubscribe";
import { getProduct } from "../../store/actions/product.action";
import { takeUntil } from "rxjs";
import { selectCurrentProduct } from "../../store/selectors/product.selector";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent extends RxUnsubscribe implements OnInit {

  product?: Product;
  id: string;

  constructor(private store$: Store, private activateRoute: ActivatedRoute, private cdr: ChangeDetectorRef) {
    super();
    this.id = this.activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.store$.dispatch(getProduct({ id: this.id }));
    this.store$.select(selectCurrentProduct)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data?: Product) => {
          this.product = data;
          this.cdr.markForCheck();
        },
      );
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
