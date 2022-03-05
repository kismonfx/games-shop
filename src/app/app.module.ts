import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./modules/material/material.module";
import { HeaderModule } from "./modules/header/header.module";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { CartComponent } from "./pages/cart/cart.component";
import { FavouritesComponent } from "./pages/favourites/favourites.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { ProductComponent } from "./pages/product/product.component";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CatalogItemComponent } from "./components/catalog-item/catalog-item.component";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CatalogComponent,
    CatalogItemComponent,
    FavouritesComponent,
    OrdersComponent,
    ProductComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HeaderModule,
    MaterialModule,

    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
