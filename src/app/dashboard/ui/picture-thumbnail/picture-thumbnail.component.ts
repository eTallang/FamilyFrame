import { Component, Input } from '@angular/core';

import { Picture } from '../../picture';

@Component({
  selector: 'ff-picture-thumbnail',
  templateUrl: './picture-thumbnail.component.html',
  styleUrls: ['./picture-thumbnail.component.scss']
})
export class PictureThumbnailComponent {
  @Input() picture: Picture;
}
