import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss'],
})
export class RestComponent implements OnInit {

  constructor(private rest:RestService) { }

  ngOnInit() {
    this.getRest();
  }

  getRest(){
    return this.rest.getRest();
  }

}
