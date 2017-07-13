import { Component, Input } from '@angular/core';

import { PictureService } from '../../../services';

@Component({
  selector: 'ff-upload-progress',
  templateUrl: './upload-progress.component.html',
  styleUrls: ['./upload-progress.component.scss']
})
export class UploadProgressComponent {
  @Input() picture: File;
  @Input()
  set mode(state: string) {
    if (state === 'uploading') {
      this.pictureService.uploadPicture(this.picture)
      .subscribe(progress => this.progress = progress);
      this.progressBarMode = 'determinate';
    }
  }
  progressBarMode = 'none';
  progress: number;

  constructor(private pictureService: PictureService) { }
}
