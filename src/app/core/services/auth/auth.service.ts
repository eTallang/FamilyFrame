import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  isSignedIn = true;

  constructor(private router: Router) {
    this.observeUserState();
  }

  signIn(username: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(username, password);
  }

  signOut() {
    firebase.auth().signOut();
    this.router.navigate(['/login']);
  }

  changePassword(newPassword: string) {
    const currentUser = firebase.auth().currentUser;
    return currentUser.updatePassword(newPassword);
  }

  observeUserState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isSignedIn = true;
      } else {
        this.isSignedIn = false;
      }
    });
  }

}