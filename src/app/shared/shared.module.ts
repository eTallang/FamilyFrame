import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FfMaterialDesignModule } from './ff-material-design.module';
import { ButtonSpinnerDirective } from './directives';
import { ButtonComponent, HeaderComponent, InputComponent } from './ui';

@NgModule({
  imports: [
    CommonModule,
    FfMaterialDesignModule
  ],
  declarations: [
    ButtonSpinnerDirective,
    ButtonComponent,
    HeaderComponent,
    InputComponent
  ],
  exports: [
    CommonModule,
    FfMaterialDesignModule,
    ButtonSpinnerDirective,
    ButtonComponent,
    HeaderComponent,
    InputComponent
  ]
})
export class SharedModule { }
