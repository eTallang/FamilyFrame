import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ff-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.scss']
})
export class UploadButtonComponent {
  @Output() onSelection = new EventEmitter<File[]>();

  photosChanged(element: any) {
    const selectedFiles: File[] = element.srcElement.files;
    this.onSelection.emit(selectedFiles);
  }
}
