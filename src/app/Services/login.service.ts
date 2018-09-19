import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: Observable<firebase.User>;// se le pone null para evitar que almacene el ultimo
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = null;
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          //console.log(this.userDetails.uid);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
  isLoggedIn() {
    if(this.userDetails!=null){
     // if (this.userDetails.uid == null) {
      if (this.userDetails.uid != "j6EbJDZf3BWagJOekEgNvvZO8pn1") {
        return false;
      } else {
        return true;
      }
    }
  }
  logOut() {
    return this._firebaseAuth.auth.signOut();
  }
}
