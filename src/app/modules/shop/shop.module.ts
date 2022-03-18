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

@NgModule({
  declarations: [
    CartComponent,
    CatalogComponent,
    CatalogItemComponent,
    DialogComponent,
    FavouritesComponent,
    OrdersComponent,
    ProductComponent,
    ProductFormComponent,
    ShopComponent,
  ],
  entryComponents: [
    DialogComponent,
    ProductFormComponent,
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
  providers: [ProductService],

})
export class ShopModule {
}
