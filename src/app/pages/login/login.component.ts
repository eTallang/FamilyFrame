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

  constructor(private authService: AuthService, private router: Router) { }

  signIn() {
    this.authService.signIn(this.username, this.password)
    .then(result => {
      console.log('Right username and password!');
      this.router.navigate(['']);
    }).catch(error => {
      console.log('TODO... Wrong username or password!');
    });
  }
}
