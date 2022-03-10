import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../../models/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/products";

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`);
  }

  getOneProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  deleteProduct(id: string): Observable<unknown> {
    return this.http.delete(`${this.url}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    const formData: FormData = ProductService.getFormData(product);
    return this.http.post<Product>(`${this.url}`, formData);
  }

  updateProduct(id: string, product: Product): Observable<any> {
    const formData: FormData = ProductService.getFormData(product);

    return this.http.put(`${this.url}/${id}`, formData);
  }

  private static getFormData(product: Product): FormData {
    const formData: FormData = new FormData();
    formData.append("title", product.title);
    formData.append("genre", product.genre);
    formData.append("developer", product.developer);
    formData.append("price", String(product.price));
    formData.append("release", String(product.release));
    formData.append("description", product.description);
    formData.append("rating", String(product.rating));
    formData.append("platform", product.platform);
    // @ts-ignore
    formData.append("image", product.uploadImage);
    return formData;
  }


}
