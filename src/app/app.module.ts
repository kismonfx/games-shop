import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { ProductEffects } from "./store/effects/product.effect";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ShopModule } from "./modules/shop/shop.module";
import { RouterModule } from "@angular/router";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthEffects } from "./store/effects/auth.effect";
import { JwtModule } from "@auth0/angular-jwt";
import { AuthInterceptor } from "./services/auth.interceptor";
import { AuthGuard } from "./guards/auth.guard";
import { GuestGuard } from "./guards/guest.guard";
import {FavouritesEffects} from "./store/effects/favourites.effect";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    RouterModule,
    ShopModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: (request) => request as any
      }
    }),

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, ProductEffects, FavouritesEffects]),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    GuestGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
