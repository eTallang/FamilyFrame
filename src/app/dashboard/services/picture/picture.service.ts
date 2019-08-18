import { Injectable } from '@angular/core';
import { storage, database } from 'firebase';
import { Observable } from 'rxjs/Observable';

import { Picture } from '../../picture';
import { ResizeService } from '../resize/resize.service';

@Injectable()
export class PictureService {
  storageRef;
  databaseRef;

  constructor(private resizeService: ResizeService) {
    this.storageRef = storage().ref();
    this.databaseRef = database();
  }

  uploadPicture(picture: File) {
    const metadata = {
      contentType: 'image/jpeg'
    };

    return this.storageRef.child('pictures/' + picture.name).put(picture, metadata);
  }

  addPictureToDatabase(fileName: string, url: string) {
    const name = this.removeFileEnding(fileName);
    this.databaseRef.ref('pictures/' + name).set({
      url: url
    });
  }

  getPictures(): Observable<Picture[]> {
    const that = this;
    return new Observable(observer => {
      this.databaseRef.ref('pictures')
        .on('value', function (snapshot) {
          const pictures = that.mapObjectToArray(snapshot.val());
          observer.next(pictures);
        });
    })
  }

  mapObjectToArray(object: any): Picture[] {
    if (!object) {
      return [];
    }

    const newArray: Picture[] = [];
    for (const key of Object.keys(object)) {
      const url = object[key].url;
      newArray.push({
        name: key,
        url: url
      });
    }

    return newArray;
  }

  removeFileEnding(filename: string): string {
    const indexOfDot = filename.indexOf('.');
    if (indexOfDot > -1) {
      return filename.substring(0, indexOfDot);
    }

    return filename;
  }
}
