import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {

  


  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!req.url.includes("login") || !req.url.includes("register")){
      req = req.clone({url:environment.serverUrl + req.url ,headers: req.headers.set( 'Authorization', 'Bearer ')});
    }
    return next.handle(req);
  }
}
