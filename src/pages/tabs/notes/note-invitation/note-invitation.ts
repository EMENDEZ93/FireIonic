import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FriendsService} from "../../../../services/tabs/friends/friends.service";
import firebase from "firebase";
import {Invitation} from "../../../../models/note/note-invitation/invitation";
import {NoteProvider} from "../../../../services/note/note";

@IonicPage()
@Component({
  selector: 'page-note-invitation',
  templateUrl: 'note-invitation.html',
})
export class NoteInvitationPage {

  friends;
  invitation = {} as Invitation;

  constructor(public navCtrl: NavController, public navParams: NavParams, public friendsService: FriendsService,
              public noteProvider: NoteProvider) {

    this.invitation.idNote = this.navParams.get("note_id");

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

  postInvitation(guest_email){
    this.invitation.guest = guest_email;
    this.invitation.status = false;

    this.noteProvider.postInvitation(this.invitation).subscribe(
      (invitation) =>{  },
      (error) => {console.log(error)}
    );
  }

}
