import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { CartItem } from "../../models/cartItem.model";

export type CartState = EntityState<CartItem>;

export const adapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>({
  selectId: (cartItem: CartItem) => cartItem.product._id,
});
