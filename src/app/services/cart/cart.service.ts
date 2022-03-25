import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { CartItem } from "../../models/cartItem.model";

@Injectable({
  providedIn: "root"
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  private apiURL = environment.apiURL + "/cart";

  getCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.apiURL}`);
  }

  addProduct(productId: string): Observable<CartItem> {
    return this.http.post<CartItem>(`${this.apiURL}/add`, { productId });
  }

  deleteProduct(productId: string): Observable<{ productId: string }> {
    return this.http.post<{ productId: string }>(`${this.apiURL}/delete`, { productId });
  }
}
