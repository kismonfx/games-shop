import { CartItem } from "./cartItem.model";

export interface Order{
  id: number;
  amount: number;
  create: Date;
  status: string;
  products: CartItem[];
}
