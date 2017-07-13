import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PictureService {
  storageRef;

  constructor() {
    this.storageRef = firebase.storage().ref();
  }

  uploadPicture(picture: File) {
    const metadata = {
      contentType: 'image/jpeg'
    };

    return this.storageRef.child('pictures/' + picture.name).put(picture, metadata);
  }
}
