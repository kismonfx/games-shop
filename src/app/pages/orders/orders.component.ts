import { Component, OnInit } from "@angular/core";
import { Order } from "../../models/order.model";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.less"]
})
export class OrdersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  orders: Order[] = [
    {
      id: 1,
      amount: 1600,
      create: new Date("2022-03-01"),
      status: "В обработке",
      products: [
        {
          id: 2,
          title: "Detroit: Become Human",
          price: 800,
          qty: 2,
          img: "assets/detroit.jpg"
        },
      ],
    },
    {
      id: 2,
      amount: 2300,
      create: new Date("2022-03-02"),
      status: "Выполнен",
      products: [
        {
          id: 1,
          title: "FIFA 22",
          price: 1500,
          qty: 1,
          img: "assets/fifa22.png"
        },
        {
          id: 2,
          title: "Detroit: Become Human",
          price: 800,
          qty: 1,
          img: "assets/detroit.jpg"
        },
      ],
    },
  ];

}
