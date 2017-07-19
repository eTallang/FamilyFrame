import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';

import { AppRoutingModule } from './app-routing.module';
import {
  AppComponent,
  LoginComponent,
  DashboardComponent,
  ChangePasswordComponent
} from './pages';
import {
  HeaderComponent,
  UploadPanelComponent,
  ButtonComponent,
  UploadButtonComponent,
  InputComponent,
  UploadCardComponent,
  UploadProgressComponent,
  PictureListComponent,
  PictureThumbnailComponent
} from './ui';
import { AuthGuard } from './guards';
import {
  AuthService,
  PictureService } from './services';
import { FfMaterialDesignModule } from './modules';
import { ButtonSpinnerDirective } from './directives';

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
    DashboardComponent,
    UploadPanelComponent,
    ButtonComponent,
    UploadButtonComponent,
    InputComponent,
    UploadCardComponent,
    UploadProgressComponent,
    ChangePasswordComponent,
    PictureListComponent,
    PictureThumbnailComponent,
    ButtonSpinnerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FfMaterialDesignModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    PictureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
