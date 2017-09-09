import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';

@NgModule({
  imports: [
    SharedModule,
    ChangePasswordRoutingModule
  ],
  declarations: [
    ChangePasswordComponent
  ]
})
export class ChangePasswordModule { }
