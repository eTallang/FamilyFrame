import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';

import { PictureService } from '../../../services';

@Component({
  selector: 'ff-upload-progress',
  templateUrl: './upload-progress.component.html',
  styleUrls: ['./upload-progress.component.scss']
})
export class UploadProgressComponent {
  @Input() picture: File;
  @Input() set mode(state: string) {
    if (state === 'uploading') {
      if (!this.pictureRef) {
        this.pictureRef = this.pictureService.uploadPicture(this.picture);
        this.monitorUploadProgress();
      } else {
        this.pictureRef.resume();
      }
    } else if (state === 'pause' && this.pictureRef) {
      this.pictureRef.pause();
    } else if (state === 'cancelled') {
      this.pictureRef.cancel();
    }
  }
  @Output() finished = new EventEmitter();
  pictureRef: any;
  progress = 0;

  constructor(private pictureService: PictureService) { }

  monitorUploadProgress() {
    const that = this;
    this.pictureRef.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function (snapshot) {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        that.progress = percent;
      }, function (error) {
        that.progress = 0;
      }, function () {
        const name = that.pictureRef.snapshot.metadata.name;
        const url = that.pictureRef.snapshot.downloadURL;
        that.pictureService.addPictureToDatabase(name, url);
        that.finished.emit();
      });
  }
}
