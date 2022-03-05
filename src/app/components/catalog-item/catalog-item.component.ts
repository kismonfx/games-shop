import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";

@Component({
  selector: "app-catalog-item",
  templateUrl: "./catalog-item.component.html",
  styleUrls: ["./catalog-item.component.less"]
})
export class CatalogItemComponent implements OnInit {

  @Input() product!: Product;
  @Input() isFavourite!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
