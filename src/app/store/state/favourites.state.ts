import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Product } from "../../models/product.model";

export interface FavouritesState extends EntityState<Product>{}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({});
