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
  public rows;
  public columns=[
    { name: 'Id', prop: 'id' },
    { name: 'Descrição', prop: 'descricao' },
    { name: 'Categoria', prop: 'cat' },
    { name: 'Descrição', prop: 'descricao' },
    { name: 'Categoria', prop: 'cat' },
    { name: 'Descrição', prop: 'descricao' },
    { name: 'Categoria', prop: 'cat' },
  ];

  constructor(private rest:RestService,private loading:LoadingService ) { 
  }
  
  ngOnInit() {
    this.getRest();
    
  }

  getRest(){
    this.loading.show();
    this.rest.getRest().subscribe((data)=>{
      console.log(data);
      /* catchError((err)=>{
        alert(err.message);
        return throwError(err.message);
      })

      this.rows=data.rows; */
    });
  }

}
