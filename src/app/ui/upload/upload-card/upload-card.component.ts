import { Component, Input } from '@angular/core';

@Component({
  selector: 'ff-upload-card',
  templateUrl: './upload-card.component.html',
  styleUrls: ['./upload-card.component.scss']
})
export class UploadCardComponent {
  @Input() photos: File[] = [];
}
