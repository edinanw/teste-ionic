import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading=false;
  constructor(private loading: LoadingController) { }

  async show(){
    this.isLoading=true;
     await this.loading.create().then(a=>{
      if (!this.isLoading) {
        a.dismiss();
      }else{
        a.present();
      }
    });
    
  }
  
  async hide(){
    this.isLoading=false;
    await this.loading.dismiss();
  }
}
