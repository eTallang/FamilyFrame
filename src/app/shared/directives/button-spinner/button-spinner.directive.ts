import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ffButtonSpinner]'
})
export class ButtonSpinnerDirective {
  private dimensions = '20px';

  @HostBinding('style.width')
  width = this.dimensions;

  @HostBinding('style.height')
  height = this.dimensions;
}
