import { Injectable } from "@angular/core";
import { User } from "../../models/user.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map, Observable } from "rxjs";
import { Token } from "../../models/token.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import { select, Store } from "@ngrx/store";
import { AuthData } from "../../models/authData";
import { getAuthData } from "../../store/selectors/auth.selector";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService, private store$: Store) {
  }

  isAuth$ = this.store$.pipe(
    select(getAuthData),
    map((authData) => !!authData),
  );

  isGuest$ = this.isAuth$.pipe(
    map((authData) => !authData),
  );

  private apiURL = environment.apiURL + "/auth";

  login(user: User): Observable<AuthData> {
    return this.http.post<Token>(`${this.apiURL}/login`, user).pipe(
      map((token) => {
        return {
          ...token,
          ...this.jwtHelperService.decodeToken(token.token)
        };
      }),
    );
  }

  registration(user: User): Observable<AuthData> {
    return this.http.post<Token>(`${this.apiURL}/registration`, user).pipe(
      map((token) => {
        return {
          ...token,
          ...this.jwtHelperService.decodeToken(token.token)
        };
      }),
    );
  }

  logout(): void {
    localStorage.removeItem("authData");
  }

}
