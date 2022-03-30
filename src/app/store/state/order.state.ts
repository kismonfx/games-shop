import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Order } from "../../models/order.model";

export type OrderState = EntityState<Order>;

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>({
  selectId: (order: Order) => order._id ?? "",
});
