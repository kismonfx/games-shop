import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Product } from "../../models/product.model";

export type FavouritesState = EntityState<Product>;

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({});
