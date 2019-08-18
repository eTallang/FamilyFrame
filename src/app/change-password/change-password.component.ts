import { Component } from '@angular/core';

import { AuthService } from '../core';

@Component({
  selector: 'ff-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  password: string;
  validationMessage: string;
  passwordIsVisible = false;
  changingPassword = false;
  type = 'password';

  constructor(private authService: AuthService) { }

  changePassword() {
    this.changingPassword = true;
    this.authService.changePassword(this.password)
    .then(response => {
      this.validationMessage = 'Your password has been updated.';
      this.changingPassword = false;
    })
    .catch(error => {
      this.changingPassword = false;
      this.validationMessage = error.message;
    });
  }

  toggleShowPassword() {
    if (this.passwordIsVisible) {
      this.passwordIsVisible = false;
      this.type = 'password';
    } else {
      this.passwordIsVisible = true;
      this.type = 'text';
    }
  }
}
