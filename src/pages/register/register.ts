import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HttpClient } from '@angular/common/http';
import { Signin } from '../../model/signin';
import { RegisterService } from './register.service';
import { ErrorBody } from '../../model/error/error-body';
import { LoginPage } from '../login/login';
declare const OktaAuth: any;

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [
    OAuthService,
    RegisterService
  ]
})
export class RegisterPage {
  private signin: Signin;
  private erroObj: ErrorBody;
  private error: string;

  constructor(private navCtrl: NavController, private http: HttpClient, private registerService: RegisterService, public toastCtrl: ToastController) {
    this.signin = new Signin;
    this.erroObj = new ErrorBody;
  }

  register(): void {
    this.registerService.register(this.signin)
      .subscribe(res => {
        let toast = this.toastCtrl.create({
          message: "Parabéns " + res.profile.firstName.toUpperCase() + ", você foi cadastrado com sucesso. Um email de ativação foi enviado para você para finalizar seu cadastro.",
          duration: 5000,
          position: 'top'
        });
        toast.present();
        this.navCtrl.push(LoginPage);
      }, error => {
        this.erroObj = JSON.parse(error._body);
        let errorMessage = "";
        this.erroObj.errorCauses.map(x => {
          errorMessage += x.errorSummary + ", ";
        });
        let toast = this.toastCtrl.create({
          message: errorMessage,
          duration: 5000,
          position: 'top'
        });
        toast.present();
      })
  }
}
