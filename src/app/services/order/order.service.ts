import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Order } from "../../models/order.model";

@Injectable({
  providedIn: "root"
})
export class OrderService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + "/orders";

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiURL}`);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiURL}`, order);
  }

  deleteOrder(orderId: string): Observable<{ orderId: string }> {
    return this.http.delete<{ orderId: string }>(`${this.apiURL}/${orderId}`);
  }

  updateOrder(orderId: string, order: Order): Observable<Order> {
    return this.http.patch<Order>(`${this.apiURL}/${orderId}`, order);
  }
}
