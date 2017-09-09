import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { trigger, style, transition, animate, query, keyframes, stagger } from '@angular/animations';

import { PictureService } from '../../services';
import { Picture } from '../../picture';

@Component({
  selector: 'ff-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('40ms', [
          animate('500ms cubic-bezier(0,.59,.39,1)', keyframes([
            style({ opacity: 0, transform: 'translateY(-20px)', offset: 0}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), { optional: true } )
      ])
    ])
  ]
})
export class PictureListComponent implements OnInit {
  pictures: Picture[] = [];

  constructor(private pictureService: PictureService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.pictureService.getPictures()
      .subscribe(pictures => {
        this.pictures = pictures;
        this.changeDetectorRef.detectChanges();
      });
  }
}
