import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'ff-upload-panel',
  templateUrl: './upload-panel.component.html',
  styleUrls: ['./upload-panel.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(-30px)', opacity: 0 }),
        animate('400ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ]),
      transition('* => void', [
        animate(0, style({ transform: 'translateY(-30px)', opacity: 0 }))
      ])
    ])
  ]
})
export class UploadPanelComponent {
  photos: File[];

  setPhotos(photos: File[]) {
    this.photos = photos;
  }

  clearPhotos() {
    this.photos = null;
  }
}
