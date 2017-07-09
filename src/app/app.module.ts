import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, LoginComponent, DashboardComponent } from './pages';
import { HeaderComponent } from './ui';
import { AuthGuard } from './guards';
import { AuthService } from './services';

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
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
