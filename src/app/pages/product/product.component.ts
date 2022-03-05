import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "../../models/product.model";
import { getProductById } from "../../store/selectors/product.selector";
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.less"]
})
export class ProductComponent implements OnInit, OnDestroy {

  product: Product | undefined;
  id: number;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store$: Store, private activateRoute: ActivatedRoute) {
    this.id = +this.activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {

    this.store$.select(getProductById(this.id)).pipe(
      takeUntil(this.destroy$),
    ).subscribe(
      (product) => {
        this.product = product;
      },
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getColor(rating: number): string{
    if (rating >= 75){
      return "#37a810";
    } if (rating >= 50){
      return "#cec325";
    } if (rating >= 30){
      return "#f7aa38";
    }
      return "#ec2f3e";
  }

}
