import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  isSignedIn = false;

  constructor() {
    this.observeUserState();
  }

  login(username: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(username, password);
  }

  logout(): firebase.Promise<any> {
    return firebase.auth().signOut();
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
