import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../models/user/user";
import { AngularFireAuth } from '@angular/fire/auth';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseAuth: AngularFireAuth) {
  }

  register(user: User){
    try{
      this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

    } catch (e) {
     console.error(e);
    }

  }

}
