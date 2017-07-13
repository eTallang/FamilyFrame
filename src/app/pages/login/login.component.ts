import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';

@Component({
  selector: 'ff-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;
  validationMessage: string;
  signingIn = false;

  constructor(private authService: AuthService, private router: Router) { }

  signIn() {
    this.signingIn = true;
    this.authService.signIn(this.username, this.password)
    .then(result => {
      this.signingIn = false;
      this.router.navigate(['']);
    }).catch(error => {
      this.signingIn = false;
      this.validationMessage = error.message;
    });
  }
}
