import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PictureService {
  storageRef;
  databaseRef;

  constructor() {
    this.storageRef = firebase.storage().ref();
    this.databaseRef = firebase.database();
  }

  uploadPicture(picture: File) {
    const metadata = {
      contentType: 'image/jpeg'
    };

    return this.storageRef.child('pictures/' + picture.name).put(picture, metadata);
  }

  addPictureToDatabase(fileName: string, url: string) {
    const name = this.removeFileEnding(fileName);
    console.log(name);
    this.databaseRef.ref('pictures/' + name).set({
      url: url
    });
  }

  getPictures(): Observable<string[]> {
    return new Observable(observer => {
      this.databaseRef.ref('pictures')
      .on('value', function (snapshot) {
        observer.next(snapshot.val());
      });
    })
  }

  removeFileEnding(filename: string): string {
    const indexOfDot = filename.indexOf('.');
    if (indexOfDot > -1) {
      return filename.substring(0, indexOfDot);
    }

    return filename;
  }
}
