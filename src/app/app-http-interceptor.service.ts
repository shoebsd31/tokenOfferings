import { Injectable } from '@angular/core';
// import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpClient
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RefreshTokenService } from './refresh-token.service';

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {
    constructor(private http:HttpClient, private refreshTokenService:RefreshTokenService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data:any = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                console.log("error from api",data);
                if(data.status===401){
                    const refreshToken: string = localStorage.getItem('refreshToken');
                    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + refreshToken) });
                 this.refreshTokenService.refreshToken().subscribe(data=>{
                    localStorage.clear();
                    localStorage.setItem('token',data.accessToken);
                    localStorage.setItem('accessToken',data.refreshToken);
                })
                }
                return throwError(error);
            }));
    }
}