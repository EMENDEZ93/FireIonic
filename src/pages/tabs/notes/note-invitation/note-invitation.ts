import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FriendsService} from "../../../../services/tabs/friends/friends.service";
import firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-note-invitation',
  templateUrl: 'note-invitation.html',
})
export class NoteInvitationPage {

  friends;

  constructor(public navCtrl: NavController, public navParams: NavParams, public friendsService: FriendsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteInvitationPage');
  }

  ionViewWillEnter(){
    this.friendsService.getFriends(firebase.auth().currentUser.email).subscribe(
      (friends) =>{ this.friends = friends; },
      (error) => {console.log(error)}
    );
  }

}
