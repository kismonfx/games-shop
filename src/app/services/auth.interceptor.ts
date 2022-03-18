import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authData = localStorage.getItem("authData");

    if (authData){
      const token = JSON.parse(authData);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.token}`,
        }
      });
    }

    return next.handle(request);
  }
}
