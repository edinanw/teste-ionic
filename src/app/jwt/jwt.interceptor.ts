import { JwtService } from './jwt.service';
import { Observable } from 'rxjs';
import { Injectable, NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
    constructor(private jwt: JwtService) { }
    //evento ativado ao enviar uma requisição http
    intercept(http: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.jwt.getToken();
        //verifica se o token está disponível
        if (token != "") {
            //adiciona token ao header da requisição
            const req = http.clone({
                headers: http.headers.set('X-API-KEY', token),
            });

            return next.handle(req);
        } else {
            return next.handle(http.clone());
        }
    }
}

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})


export class JwtInterceptor { }