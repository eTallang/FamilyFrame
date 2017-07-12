import { Component } from '@angular/core';

@Component({
  selector: 'ff-upload-panel',
  templateUrl: './upload-panel.component.html',
  styleUrls: ['./upload-panel.component.scss']
})
export class UploadPanelComponent {
  photos: File[];
}
