import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) { }

  signOut() {
    this.authService.signOut();
  }

  goToChangePassword() {
    this.router.navigate(['change-password']);
  }
}
