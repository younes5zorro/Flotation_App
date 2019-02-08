import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';



import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the TakeimgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-takeimg',
  templateUrl: 'takeimg.html',
})
export class TakeimgPage {

  captureDataUrl: string;
  loading;
  doc :{}
  constructor(public loadingCtrl:LoadingController ,private camera: Camera,private db: AngularFireDatabase, private afStorage: AngularFireStorage,public navCtrl: NavController) {
  }



  // upload()  {
  //   this.loading = this.loadingCtrl.create({
	// 		content: "Uploding photo wait ..."
	// 		 });
  //   this.loading.present();

  //   const time = new Date().getTime();
  //   const path = `images/${time}.jpg`;

  //   this.afStorage.ref(path).putString(this.captureDataUrl,'data_url');
  //   let toSave = {
  //     name: time,
  //     createdAt : time,
  //     fullPath: path
  //   }

  //   this.db.list('images').push(toSave);
  //   this.loading.dismiss()
  // }

  upload()  {
    this.loading = this.loadingCtrl.create({
			content: "Uploding photo wait ..."
			 });
    this.loading.present();

    const time = new Date().getTime();
    const path = `presentation/${time}.jpg`;

    this.afStorage.ref(path).putString(this.captureDataUrl,'data_url');

    this.doc = {
      url:path,
      zn:(Math.random() * (4.93 - 1.6) +1.6).toFixed(2),
      pb:(Math.random() * (70.17 - 53.7) +53.7).toFixed(2),
      cu:(Math.random() * ( 1.11 - 0.26) +0.26).toFixed(2),
      status : true,
      phone:true
      }


    this.db.list('presentation').push(this.doc);
    this.loading.dismiss()
  }

  capture() {

    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA ,
      targetHeight: 500,
      targetWidth: 500,
      correctOrientation: true,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {

      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      this.upload();

    }, (err) => {
      // Handle error
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakeimgPage');
  }

}
