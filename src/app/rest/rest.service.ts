import { map, finalize, catchError } from 'rxjs/operators';
import { LoadingService } from './../loading.service';
import { Platform } from '@ionic/angular';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,from, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(private http:HttpClient, private platform: Platform, private loading:LoadingService ) { }
  
  getRest(){
    let url='http://testeapirest.000webhostapp.com/api/ocorrencias';
    if(this.platform.is('desktop')){
      //let url='http://testeapirest.000webhostapp.com/api/ocorrencias';
      url='http://localhost/restci3/api/ocorrencias';
    }
    
    //resolve problema de CORS
    var headers =  new HttpHeaders({
      'Content-Type': 'text/plain'
    });

    

    return this.http.post<any>(url,[],{headers:headers}).pipe(
      finalize(()=>{
        this.loading.hide();
      }),catchError((err)=>{
        alert(err.message);
        return throwError(err.message);
      })
      
    //executar a requisição
    );
  }

}
