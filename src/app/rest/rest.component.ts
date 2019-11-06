import { LoadingService } from './../loading.service';
import { throwError, Observable } from 'rxjs';
import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';
import { map,catchError, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss'],
})
export class RestComponent implements OnInit {
  public data;
  public rows;
  public columns=[
    { name: 'Id', prop: 'id' },
    { name: 'Descrição', prop: 'descricao' },
    { name: 'Categoria', prop: 'cat' },
  ];
  

  constructor(private rest:RestService,private loading:LoadingService ) { }

  ngOnInit() {
    this.getRest();
  }

  getRest(){
    this.loading.show();
    this.rest.getRest().pipe(  
      map((data)=>{
        this.rows=data.rows;
        this.data=data.rows;
        console.log(this.data);
      }),finalize(()=>{
        console.log('terminou');
        this.loading.hide();
      }),catchError((err)=>{
        console.log(err.message);
        return throwError(err.message);
      })
    //executar a requisição
    ).subscribe();
  }

}
