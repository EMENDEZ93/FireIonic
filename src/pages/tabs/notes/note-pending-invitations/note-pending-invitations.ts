import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {NoteProvider} from "../../../../services/note/note.service";
import {InvitationService} from "../../../../services/tabs/notes/invitation.service";

@IonicPage()
@Component({
  selector: 'page-note-pending-invitations',
  templateUrl: 'note-pending-invitations.html',
})
export class NotePendingInvitationsPage {

  pending_invitations_to_notes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public noteProvider: NoteProvider,
              public invitationService: InvitationService) {
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

  getChangeInvitationStatusByNodeIdAndGuestEmail(note_id){
    this.invitationService.getChangeInvitationStatusByNodeIdAndGuestEmail(note_id, firebase.auth().currentUser.email).subscribe(
      (reponse) =>{ this.ionViewWillEnter(); },
      (error) => {console.log(error)}
    );
  }

}
