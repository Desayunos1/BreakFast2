import { Injectable } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
import { ManageDBService } from './manage-db.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: Observable<firebase.User>;// se le pone null para evitar que almacene el ultimo
  private userDetails: firebase.User = null;
  private subscrition1:Subscription;
  private subscrition2:Subscription;
  private once: Boolean;

  constructor(private _firebaseAuth: AngularFireAuth, public dbService:ManageDBService) {
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
    
    this.once=false;
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    
  }
  verifyUserLogged(){
    console.log(this.userDetails.uid);
      console.log(this.userDetails.displayName);
        console.log(this.userDetails.email);
    this.subscrition1 = this.dbService.getUser(this.userDetails.uid.toString())
    .snapshotChanges()
    .subscribe(item=>
      {
        console.log(item.length);
        let l1=item.length;
        this.subscrition2 = this.dbService.getUserAcepted(this.userDetails.uid.toString())
        .snapshotChanges()
        .subscribe(item=>
        {
          console.log(item.length);          
          let l2=item.length;
          if(l1==0){
            if(l2==0){
              this.dbService.insertListUser({
                $key: this.userDetails.uid.toString(),
                name: this.userDetails.displayName.toString(),
                email: this.userDetails.email.toString()
              });
            }

          }
        });
      });
      

      
  }
  ngOnDestroy(){
    this.subscrition1.unsubscribe();
    this.subscrition2.unsubscribe();
  }
  isLoggedIn() {
    if(this.userDetails!=null){
      if (this.userDetails.uid == null) {
      //if (this.userDetails.uid != "j6EbJDZf3BWagJOekEgNvvZO8pn1") {
      
        this.once=false;
        return false;

      } else {
        
        if(!this.once){
          this.once=true;
          this.verifyUserLogged();
        }
        
        return true;
      }
    }
  }
  logOut() {
    return this._firebaseAuth.auth.signOut();
  }
}