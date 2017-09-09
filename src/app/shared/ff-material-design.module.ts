import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdProgressBarModule, MdProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    MdProgressBarModule,
    MdProgressSpinnerModule
  ],
  exports: [
    FlexLayoutModule,
    MdProgressBarModule,
    MdProgressSpinnerModule
  ]
})
export class FfMaterialDesignModule { }
