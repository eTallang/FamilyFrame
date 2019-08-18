import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable()
export class AuthService {
  isSignedIn = true;

  constructor(private router: Router) {
    this.observeUserState();
  }

  signIn(username: string, password: string): Promise<any> {
    return auth().signInWithEmailAndPassword(username, password);
  }

  signOut() {
    auth().signOut();
    this.router.navigate(['/login']);
  }

  changePassword(newPassword: string) {
    const currentUser = auth().currentUser;
    return currentUser.updatePassword(newPassword);
  }

  observeUserState() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.isSignedIn = true;
      } else {
        this.isSignedIn = false;
      }
    });
  }

}
