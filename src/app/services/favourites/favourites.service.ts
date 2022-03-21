import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private http: HttpClient, private store$: Store) { }

  private apiURL = environment.apiURL + "/favourites";

  getFavourites(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}`);
  }

  addFavourite(productId: string): Observable<Product> {
    return this.http.post<Product>(`${this.apiURL}/add`, {productId});
  }

  deleteFavourite(productId: string): Observable<{ productId: string }> {
    return this.http.post<{ productId: string }>(`${this.apiURL}/delete`, {productId});
  }
}
