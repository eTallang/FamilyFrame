import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import './rxjs-dependencies';
import { initializeApp } from 'firebase';

import { AuthService } from './services/index';
import { AuthGuard } from './guards/index';
import { HeaderComponent } from './ui/header/header.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyC9TlSpdgVpu9MaBLmw_iHxfw0CQw46pNc',
    authDomain: 'familyframe-ae4de.firebaseapp.com',
    databaseURL: 'https://familyframe-ae4de.firebaseio.com',
    projectId: 'familyframe-ae4de',
    storageBucket: 'familyframe-ae4de.appspot.com',
    messagingSenderId: '694625293240'
  };
  initializeApp(firebaseConfig);
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FlexLayoutModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only.');
    }
  }
}
