import { Component, OnInit, ChangeDetectorRef} from '@angular/core';

import { PictureService } from '../../services';
import { Picture } from '../../interfaces';

@Component({
  selector: 'ff-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss']
})
export class PictureListComponent implements OnInit {
  pictures: Picture[];

  constructor(private pictureService: PictureService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.pictureService.getPictures()
      .subscribe(pictures => {
        this.pictures = pictures;
        this.changeDetectorRef.detectChanges();
      });
  }
}
