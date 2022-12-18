import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authService=this.injector.get(AuthService);
    //console.log(authService.getToken())
   let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `${authService.getToken()}`
      }
   })
   return next.handle(tokenizedReq);
  }
}
