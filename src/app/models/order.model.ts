import { CartItem } from "./cartItem.model";

export interface Order{
  _id?: string;
  total?: number;
  create?: Date;
  status?: string;
  cart?: CartItem[];
  user?: string;
}
