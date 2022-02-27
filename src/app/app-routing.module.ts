import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { CartComponent } from "./pages/cart/cart.component";
import { FavouritesComponent } from "./pages/favourites/favourites.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import {ProductComponent} from "./pages/product/product.component";

const routes: Routes = [
  { path: "cart", component: CartComponent },
  { path: "favorites", component: FavouritesComponent },
  { path: "orders", component: OrdersComponent },
  { path: "game/:id", component: ProductComponent },
  { path: "", component: CatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
