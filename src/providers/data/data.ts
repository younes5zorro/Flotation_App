// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  // constructor(public http: HttpClient,public hhttp: Http) {
  constructor(public hhttp: Http) {
    console.log('Hello DataProvider Provider');
  }

  get_result(name){

    const nname = "465qsdqsdqsd46.jpg"
    return this.hhttp.get("https://test-python1230456.herokuapp.com/api/img/test12/"+nname)
    .map(response => response.json())

  }
}
