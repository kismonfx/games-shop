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
import { ProductService } from "./services/product/product.service";
import { EffectsModule } from "@ngrx/effects";
import { ProductEffects } from "./store/effects/product.effect";
import { HttpClientModule } from "@angular/common/http";
import { DialogComponent } from "./components/dialog/dialog.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CatalogComponent,
    CatalogItemComponent,
    DialogComponent,
    FavouritesComponent,
    OrdersComponent,
    ProductComponent,
    ProductFormComponent,
  ],
  entryComponents: [
    DialogComponent,
    ProductFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HeaderModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
