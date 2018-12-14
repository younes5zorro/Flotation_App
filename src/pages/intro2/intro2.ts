import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TakeimgPage } from '../takeimg/takeimg';
/**
 * Generated class for the Intro2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro2',
  templateUrl: 'intro2.html',
})
export class Intro2Page {

  nextPage =TakeimgPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro2Page');
  }

}
