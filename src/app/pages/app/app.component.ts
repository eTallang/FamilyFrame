import { Component } from '@angular/core';

import { AuthService } from '../../services';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService) { }

  signOut() {
    this.authService.signOut();
  }
}
