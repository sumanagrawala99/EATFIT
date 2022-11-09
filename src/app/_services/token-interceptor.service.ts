import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authService=this.injector.get(JwtClientService);
   let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `${authService.getToken()}`
      }
   })
   return next.handle(tokenizedReq);
  }
}
