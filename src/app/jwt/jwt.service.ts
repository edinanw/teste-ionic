import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JwtService {

  constructor(private http:HttpClient) { }

  getToken(){
    return localStorage.getItem('token');
  }

  setToken(){
    
    //resolve problema de CORS
    var headers =  new HttpHeaders({
      'Content-Type': 'text/plain'
    });

    this.http.post<{token: string}>('https://testeapirest.000webhostapp.com/api/login',[],{headers:headers}).subscribe((data)=>{
      localStorage.setItem('token',data.token);
    });

  }
}
