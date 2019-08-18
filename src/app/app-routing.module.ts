import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './core';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/dashboard/dashboard.module.ts#DashboardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    loadChildren: 'app/change-password/change-password.module.ts#ChangePasswordModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module.ts#LoginModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
