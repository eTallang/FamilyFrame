import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isSignedIn = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isSignedIn = this.authService.isSignedIn;
  }

  signOut() {
    this.authService.signOut();
  }
}
