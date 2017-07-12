import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdProgressBarModule
  ],
  exports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdProgressBarModule
  ]
})
export class FfMaterialDesignModule { }
