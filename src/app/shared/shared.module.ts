import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FfMaterialDesignModule } from './ff-material-design.module';
import { ButtonSpinnerDirective } from './directives';
import { ButtonComponent, InputComponent } from './ui';

@NgModule({
  imports: [
    CommonModule,
    FfMaterialDesignModule
  ],
  declarations: [
    ButtonSpinnerDirective,
    ButtonComponent,
    InputComponent
  ],
  exports: [
    CommonModule,
    FfMaterialDesignModule,
    ButtonSpinnerDirective,
    ButtonComponent,
    InputComponent
  ]
})
export class SharedModule { }
