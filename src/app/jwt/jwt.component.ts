import { JwtService } from './jwt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jwt',
  templateUrl: './jwt.component.html',
  styleUrls: ['./jwt.component.scss'],
})

export class JwtComponent implements OnInit {

  public data;
  
  constructor(private jwt: JwtService) { }

  ngOnInit() {
    this.getJWT();
  }

  getJWT(){
    this.data=this.jwt.getToken();
  }

  setJWT(){
    this.jwt.setToken();
  }
}
