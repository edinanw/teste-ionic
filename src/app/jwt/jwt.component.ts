import { LoginComponent } from './login/login.component';
import { JwtService } from './jwt.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-jwt',
  templateUrl: './jwt.component.html',
  styleUrls: ['./jwt.component.scss'],
})

export class JwtComponent implements OnInit {

  public data;
  
  constructor(private jwt: JwtService,private modalController:ModalController) {
    this.getJWT();
    //token não gerado
    if(this.data!=''){
      this.openLoginModal();
    }else{
      this.closeLoginModal();
    }
  }
  
  ngOnInit() {
    
  }
  
  getJWT(){
    this.data=this.jwt.getToken();
  }

  setJWT(){
    this.jwt.setToken();
  }

  async openLoginModal(){
    const modal: HTMLIonModalElement= await this.modalController.create({
      component:LoginComponent
    });
    modal.onDidDismiss().then((d:OverlayEventDetail)=>{
      if (d !== null) {
        console.log('Erro:', d.data);
      }
    });
    await modal.present();
  }

  async closeLoginModal() { 
    await this.modalController.dismiss();
  }

}
