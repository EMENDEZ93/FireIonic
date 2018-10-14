import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {NoteProvider} from "../../../../services/note/note.service";

@IonicPage()
@Component({
  selector: 'page-note-pending-invitations',
  templateUrl: 'note-pending-invitations.html',
})
export class NotePendingInvitationsPage {

  pending_invitations_to_notes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public noteProvider: NoteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePendingInvitationsPage');
  }

  ionViewWillEnter(){
    //PendingInvitationsToNotesByGuest
    this.noteProvider.getPendingInvitationsToNotesByGuest(firebase.auth().currentUser.email).subscribe(
      (pending_notes) =>{ this.pending_invitations_to_notes = pending_notes },
      (error) => {console.log(error)}
    );
  }


}
