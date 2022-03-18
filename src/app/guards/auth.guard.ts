import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { first, map, Observable } from "rxjs";
import { AuthService } from "../services/auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<UrlTree | boolean> | Promise<UrlTree | boolean> | UrlTree | boolean {
    return this.getIsAuth();
  }

  private getIsAuth(): Observable<boolean> {
    return this.authService.isAuth$.pipe(
      first(),
      map((isAuth) => {
        if (!isAuth) {
          this.router.navigate(["auth"]);
        }
        return isAuth;
      }),
    );
  }

}
