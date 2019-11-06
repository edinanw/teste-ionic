
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    return this.http.post<any>('https://testeapirest.000webhostapp.com/api/ocorrencias',[],{headers:headers});    
  }

}
