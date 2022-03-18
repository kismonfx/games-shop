import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from "@ngrx/effects";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "../../services/auth/auth.service";
import * as AuthActions from "../actions/auth.action";
import { catchError, EMPTY, map, mergeMap, of, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(AuthActions.login),
        mergeMap(({ user }) =>
          this.authService.login(user).pipe(
            map((data) => {
              return AuthActions.loginSuccess({
                authData: data
              });
            }),
            tap((data) => {
              localStorage.setItem("authData", JSON.stringify(data.authData));
              this.snackBar.open("Вы авторизовались", "ok", { duration: 3000 });
              this.router.navigate(["shop"]);
            }),
            catchError((e) => {
              this.snackBar.open(`${e.error.message}`, "ok", { duration: 3000 });
              return EMPTY;
            }),
          ),
        ),
      );
    },
  );

  registration$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(AuthActions.registration),
        mergeMap(({ user }) =>
          this.authService.registration(user).pipe(
            map((data) => {
              return AuthActions.registrationSuccess({
                authData: data
              });
            }),
            tap((data) => {
              localStorage.setItem("authData", JSON.stringify(data.authData));
              this.snackBar.open("Вы зарегистрировались", "ok", { duration: 3000 });
              this.router.navigate(["shop"]);
            }),
            catchError((e) => {
              this.snackBar.open(`${e.error.message}`, "ok", { duration: 3000 });
              return EMPTY;
            }),
          ),
        ),
      );
    },
  );

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      mergeMap(() => {
        this.authService.logout();
        return of(AuthActions.logoutSuccess());
      }),
      tap(() => {
        this.snackBar.open("Вы вышли из системы", "ok", { duration: 3000 });
        this.router.navigate(["auth"]);
      }),
    );
  });

  extractAuthData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => {
        const authDataString = localStorage.getItem("authData");
        if (!authDataString){
          return AuthActions.logoutSuccess();
        }
        const authData = JSON.parse(authDataString);
        return AuthActions.loginSuccess({ authData });
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
  }
}

