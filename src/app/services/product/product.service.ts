import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../../models/product.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + "/products";

  getAllProducts(platform: string, genre: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}`, { params: { platform, genre } });
  }

  searchProducts(title: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}/search`, { params: { title } });
  }

  getOneProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  deleteProduct(id: string): Observable<unknown> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    const formData: FormData = ProductService.getFormData(product);
    return this.http.post<Product>(`${this.apiURL}`, formData);
  }

  updateProduct(id: string, product: Product): Observable<any> {
    const formData: FormData = ProductService.getFormData(product);

    return this.http.put(`${this.apiURL}/${id}`, formData);
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
