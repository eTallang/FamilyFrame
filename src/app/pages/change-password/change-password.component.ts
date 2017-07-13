import { Component } from '@angular/core';

import { AuthService } from '../../services';

@Component({
  selector: 'ff-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  password: string;
  validationMessage: string;
  passwordIsVisible = false;
  type = 'password';

  constructor(private authService: AuthService) { }

  changePassword() {
    this.authService.changePassword(this.password)
    .then(response => this.validationMessage = 'Your password has been updated.')
    .catch(error => {
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
