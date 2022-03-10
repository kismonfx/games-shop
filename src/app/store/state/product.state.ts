import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Product } from "../../models/product.model";

export interface ProductState extends EntityState<Product>{
  selectedProductId: string;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product._id,
});
