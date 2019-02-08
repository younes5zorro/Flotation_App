import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TakeimgPage } from '../takeimg/takeimg';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DataProvider } from '../../providers/data/data';
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
  captureDataUrl: string;
  nextPage =TakeimgPage
  films: Observable<any>;

  result;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _data: DataProvider) {


  }
  capture(name) {

    this._data.get_result("zsgdfgdfhgh")
    .subscribe(res => this.result = res)
    console.log(this.result)



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro2Page');
  }

}
