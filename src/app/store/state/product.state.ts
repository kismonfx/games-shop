import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Product } from "../../models/product.model";

export interface ProductState extends EntityState<Product>{
  products: Product[];
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();
