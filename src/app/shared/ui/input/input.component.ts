import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'input[ff-input]',
  styleUrls: ['./input.component.scss'],
  host: { 'class': 'ff-input' },
  templateUrl: './input.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InputComponent { }
