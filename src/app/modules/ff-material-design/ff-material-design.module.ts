import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdProgressBarModule, MdProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdProgressBarModule,
    MdProgressSpinnerModule
  ],
  exports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdProgressBarModule,
    MdProgressSpinnerModule
  ]
})
export class FfMaterialDesignModule { }
