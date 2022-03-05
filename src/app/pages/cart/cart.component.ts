import { Component, OnInit } from "@angular/core";
import { CartItem } from "../../models/cartItem.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.less"]
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: CartItem[] = [
    {
      id: 1,
      title: "FIFA 22",
      price: 1500,
      img: "assets/fifa22.png",
      qty: 1
    },
    {
      id: 2,
      title: "Detroit: Become Human",
      price: 800,
      img: "assets/detroit.jpg",
      qty: 1
    },
  ];

  getTotal(): number{
    let total: number = 0;

    for (const product of this.products){
      total += product.price * product.qty;
    }

    return total;
  }

}
