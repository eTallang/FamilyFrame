import { Component } from '@angular/core';

@Component({
  selector: 'ff-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;

  login() {
    console.log(this.username, this.password);
  }
}
