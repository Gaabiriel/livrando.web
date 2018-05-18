import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home-detail',
  templateUrl: 'home-detail.html'
})
export class HomeDetailPage {

  book;

  constructor(params: NavParams) {
    this.book = params.data.book;
  }

}
