import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import './rxjs-dependencies';
import * as firebase from 'firebase';

import { AuthService } from './services/index';
import { AuthGuard } from './guards/index';

export const firebaseConfig = {
    apiKey: 'AIzaSyC9TlSpdgVpu9MaBLmw_iHxfw0CQw46pNc',
    authDomain: 'familyframe-ae4de.firebaseapp.com',
    databaseURL: 'https://familyframe-ae4de.firebaseio.com',
    projectId: 'familyframe-ae4de',
    storageBucket: 'familyframe-ae4de.appspot.com',
    messagingSenderId: '694625293240'
  };
  firebase.initializeApp(firebaseConfig);
@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only.');
    }
  }
}
