import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ff-upload-card',
  templateUrl: './upload-card.component.html',
  styleUrls: ['./upload-card.component.scss']
})
export class UploadCardComponent implements OnInit {
  @Input() photos: File[] = [];
  @Output() cancelled = new EventEmitter();
  state: string;

  ngOnInit() {
    this.state = 'pause';
  }

  toggleState() {
    if (this.state === 'pause') {
      this.state = 'uploading';
    } else {
      this.state = 'pause';
    }
  }

  isPaused(): boolean {
    return this.state === 'pause';
  }

  cancelUpload() {
    this.state = 'cancelled';
    this.cancelled.emit();
  }
}
