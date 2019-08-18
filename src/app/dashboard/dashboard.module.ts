import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PictureService, ResizeService } from './services/index';
import {
  PictureListComponent,
  PictureThumbnailComponent,
  UploadButtonComponent,
  UploadCardComponent,
  UploadPanelComponent,
  UploadProgressComponent
} from './ui/index';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    PictureListComponent,
    PictureThumbnailComponent,
    UploadButtonComponent,
    UploadCardComponent,
    UploadPanelComponent,
    UploadProgressComponent
  ],
  providers: [
    PictureService,
    ResizeService
  ]
})
export class DashboardModule { }
