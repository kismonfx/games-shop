import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopComponent } from "./modules/shop/shop/shop.component";
import { CartComponent } from "./pages/cart/cart.component";
import { FavouritesComponent } from "./pages/favourites/favourites.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { ProductComponent } from "./pages/product/product.component";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { AuthComponent } from "./modules/auth/auth/auth.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegistrationComponent } from "./pages/registration/registration.component";
import { AuthGuard } from "./guards/auth.guard";
import { GuestGuard } from "./guards/guest.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "auth" },
  {
    path: "shop", component: ShopComponent, canActivate: [AuthGuard],
    children: [
      { path: "", pathMatch: "full", redirectTo: "catalog" },
      { path: "catalog", component: CatalogComponent },
      { path: "cart", component: CartComponent },
      { path: "favorites", component: FavouritesComponent },
      { path: "orders", component: OrdersComponent },
      { path: "game/:id", component: ProductComponent },
    ]
  },
  {
    path: "auth", component: AuthComponent, canActivate: [GuestGuard],
    children: [
      { path: "", pathMatch: "full", redirectTo: "login" },
      { path: "login", component: LoginComponent },
      { path: "registration", component: RegistrationComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
