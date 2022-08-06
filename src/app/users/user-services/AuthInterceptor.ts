import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { HttpClientService } from './httpclient.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    //constructor(private service: HttpClientService) { }
    constructor(){};
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (sessionStorage.getItem('userName') && sessionStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {                    
                    Authorization: sessionStorage.getItem('token')!
                }
            })
            console.log(req.headers.get('Authorization'));
            
        }

        return next.handle(req);

          if (req.headers.get('Anonymous') !== undefined) {
           const newHeaders = req.headers.delete('Anonymous')
           const newRequest = req.clone({ headers: newHeaders });
           return next.handle(newRequest);
         } 
         else 
         {console.log('in else part of interceptor')
           req = req.clone({
               setHeaders: {
                   'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
              
                 'Content-Type' : 'application/json; charset=utf-8',
                 'Accept'       : 'application/json'
                  },
             });
             console.log(req.headers.getAll('Authorization'))
             console.log(req.headers.keys)
             return next.handle(req);}          
         
              


    }
}