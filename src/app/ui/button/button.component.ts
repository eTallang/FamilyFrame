import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[ff-button]',
  styleUrls: ['./button.component.scss'],
  host: { 'class': 'ff-button' },
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent { }
