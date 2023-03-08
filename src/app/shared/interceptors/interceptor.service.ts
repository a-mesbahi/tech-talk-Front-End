import { UserServiceService } from './../../auth/service/user-service.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private userService:UserServiceService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var headers;
      if (
        !req.url.includes('login') &&
        !req.url.includes('podcaster/register') &&
        !req.url.includes('podcasts?page=') && 
        !req.url.includes('podcaster?name=') && 
        !req.url.includes('podcasts/')) {
        headers = req.headers.set('Authorization', `Bearer ${this.userService.getTheToken()}`);  
      }  
      req = req.clone({
        url: environment.serverUrl + req.url,
        headers: headers,
      });
    
    return next.handle(req);
  }
}
