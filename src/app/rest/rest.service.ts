
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(private http:HttpClient) { }

  getRest(){
    //resolve problema de CORS
    var headers =  new HttpHeaders({
      'Content-Type': 'text/plain'
    });

    return this.http.post('https://testeapirest.000webhostapp.com/api/ocorrencias',[],{headers:headers});    
  }

}
