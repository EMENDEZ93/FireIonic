import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../models/user/user";
import { AngularFireAuth } from '@angular/fire/auth';
import {UserRegister} from "../../models/user/resgister";
import {RegisterService} from "../../services/register/register.service";


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  userRegister = {} as UserRegister;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseAuth: AngularFireAuth, public registerService: RegisterService) {
  }

  register(user: User){
    try{
      this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(
        data => {

          this.userRegister.name = data.user.email;
          this.userRegister.email = data.user.email;
          this.userRegister.idFirebase = data.user.uid;
          this.registerService.postRegister(this.userRegister);

        }
      );

    } catch (e) {
     console.error(e);
    }

  }

}
