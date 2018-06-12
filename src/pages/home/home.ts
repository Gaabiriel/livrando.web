import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeDetailPage } from './home-detail/home-detail';
import { HomeProvider } from './home.provider';
import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';
import { OAuthService } from 'angular-oauth2-oidc';
import {App} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  books: Observable<any>;
  items: Array<any>;

  constructor(public navCtrl: NavController, private homeProvider: HomeProvider, public oauthService: OAuthService, public app: App) {

  }

  logout() {
    this.oauthService.logOut();
    this.app.getRootNav().setRoot(LoginPage);
  }

  getItems(ev) {
    var val = ev.target.value;
    this.homeProvider.getBookDetail(val).subscribe(res => {
      this.books = res.items;
    })
  }
  
  openNavDetailsPage(book) {
    this.navCtrl.push(HomeDetailPage, { book: book });
  }

}
