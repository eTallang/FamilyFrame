import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ff-upload-panel',
  templateUrl: './upload-panel.component.html',
  styleUrls: ['./upload-panel.component.scss']
})
export class UploadPanelComponent implements OnInit {
  photos: File[] = [];
  constructor() { }

  ngOnInit() {
  }

}
