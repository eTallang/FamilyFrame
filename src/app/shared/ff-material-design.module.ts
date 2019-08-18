import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    FlexLayoutModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ]
})
export class FfMaterialDesignModule { }
