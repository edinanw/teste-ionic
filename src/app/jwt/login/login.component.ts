import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private modalController:ModalController,private navCtrl: NavController, private formBuilder: FormBuilder) { 
  
    this.loginForm = this.formBuilder.group({
      usuario: ['', [ Validators.required,Validators.minLength(1)]], 
      senha: ['', [Validators.required,Validators.minLength(1)]],
    });
}
  ngOnInit() {}

  async closeLoginModal() { 
    this.navCtrl.back();
    await this.modalController.dismiss();
  }

  logar(data){
    console.log(data);
    this.loginForm.reset();
  }
}
