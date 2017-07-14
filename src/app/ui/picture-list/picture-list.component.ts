import { Component, OnInit } from '@angular/core';

import { PictureService } from '../../services';

interface Picture {
  name: string;
  url: string;
}

@Component({
  selector: 'ff-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss']
})
export class PictureListComponent implements OnInit {
  pictures: Picture[] = [];

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
    this.pictureService.getPictures()
      .subscribe(pictureRoot => {
        this.pictures = [];
        for (const key of Object.keys(pictureRoot)) {
          const url = pictureRoot[key].url;
          this.pictures.push({
            name: key,
            url: url
          });
        }
      });
  }
}
