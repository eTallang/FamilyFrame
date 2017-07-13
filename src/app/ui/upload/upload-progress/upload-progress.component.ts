import { Component, Input } from '@angular/core';

@Component({
  selector: 'ff-upload-progress',
  templateUrl: './upload-progress.component.html',
  styleUrls: ['./upload-progress.component.scss']
})
export class UploadProgressComponent {
  @Input() picture: File;
  @Input() mode: string;
  progress: number;

  get progressBarMode() {
    if (this.mode === 'uploading') {
      return 'indeterminate';
    } else {
      return 'none';
    }
  }
}
