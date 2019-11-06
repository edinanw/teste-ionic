import { throwError } from 'rxjs';
import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';
import { map,catchError } from 'rxjs/operators';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss'],
})
export class RestComponent implements OnInit {
  public data;

  constructor(private rest:RestService) { }

  ngOnInit() {
    this.getRest();
  }

  getRest(){
    this.rest.getRest().pipe(  
      map((data)=>{
        this.data=data;
        console.log(this.data);
      }),catchError((err)=>{
        console.log(err.message);
        return throwError(err.message);
      })
    //executar a requisição
    ).subscribe();
  }

}
