import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../models/user/user";
import {RegisterPage} from "../register/register";
import { AngularFireAuth } from '@angular/fire/auth';
import {TabsPage} from "../tabs/tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseAuth: AngularFireAuth) {
  }

  async login(user: User){
    
    try {
       const result = this.firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password);
       if(result) {
         this.navCtrl.setRoot(TabsPage);
       }
    }catch (e) {
      console.error(e);
    }
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

}
