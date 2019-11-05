
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private data;
  constructor(private http:HttpClient) { }

  getRest(){
    //resolve problema de CORS
    var headers =  new HttpHeaders({ 
      'Content-Type': 'text/plain'
    });
    
    this.http.post('https://testeapirest.000webhostapp.com/api/ocorrencias',[],{headers:headers}).pipe(
      map(
      (data)=>{
        console.log(data);
        this.data=data;
        return data;
      })).subscribe();
  }

}
