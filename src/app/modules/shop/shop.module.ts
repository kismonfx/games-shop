import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShopComponent } from "./shop/shop.component";
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { CartComponent } from "../../pages/cart/cart.component";
import { CatalogComponent } from "../../pages/catalog/catalog.component";
import { CatalogItemComponent } from "../../components/catalog-item/catalog-item.component";
import { DialogComponent } from "../../components/dialog/dialog.component";
import { FavouritesComponent } from "../../pages/favourites/favourites.component";
import { OrdersComponent } from "../../pages/orders/orders.component";
import { ProductComponent } from "../../pages/product/product.component";
import { ProductFormComponent } from "../../components/product-form/product-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "../../services/product/product.service";
import { FavouritesService } from "../../services/favourites/favourites.service";
import { CartService } from "../../services/cart/cart.service";
import { OrderService } from "../../services/order/order.service";
import { OrderFormComponent } from "../../components/order-form/order-form.component";
import { UserInfoComponent } from "../../components/user-info/user-info.component";

@NgModule({
  declarations: [
    CartComponent,
    CatalogComponent,
    CatalogItemComponent,
    DialogComponent,
    FavouritesComponent,
    OrderFormComponent,
    OrdersComponent,
    ProductComponent,
    ProductFormComponent,
    ShopComponent,
    UserInfoComponent,
  ],
  entryComponents: [
    DialogComponent,
    OrderFormComponent,
    ProductFormComponent,
    UserInfoComponent,
  ],
  exports: [
    ShopComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [CartService, FavouritesService, OrderService, ProductService],

})
export class ShopModule {
}
