import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';



import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  captureDataUrl: string;
  loading;
  constructor(public loadingCtrl:LoadingController ,private camera: Camera,private db: AngularFireDatabase, private afStorage: AngularFireStorage,public navCtrl: NavController) {

  }


  upload()  {
    this.loading = this.loadingCtrl.create({
			content: "Uploding photo wait ..."
			 });
    this.loading.present();

    const time = new Date().getTime();
    const path = `images/${time}.jpg`;

    this.afStorage.ref(path).putString(this.captureDataUrl,'data_url');
    let toSave = {
      name: time,
      createdAt : time,
      fullPath: path
    }
    this.db.list('images').push(toSave);
    this.loading.dismiss()
  }

  capture() {

    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {

      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      this.upload();

    }, (err) => {
      // Handle error
    });
  }


}
