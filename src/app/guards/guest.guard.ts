import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { first, map, Observable } from "rxjs";
import { AuthService } from "../services/auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class GuestGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<UrlTree | boolean> | Promise<UrlTree | boolean> | UrlTree | boolean {
    return this.getIsGuest();
  }

  private getIsGuest(): Observable<boolean> {
    return this.authService.isGuest$.pipe(
      first(),
      map((isGuest) => {
        if (!isGuest) {
          this.router.navigate(["shop"]);
        }
        return isGuest;
      }),
    );
  }

}
