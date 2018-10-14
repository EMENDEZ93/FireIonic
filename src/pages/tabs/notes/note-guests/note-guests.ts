import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NoteProvider} from "../../../../services/note/note.service";
import firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-note-guests',
  templateUrl: 'note-guests.html',
})
export class NoteGuestsPage {

  note_id;
  guests;
  constructor(public navCtrl: NavController, public navParams: NavParams, public noteProvider: NoteProvider) {
    this.note_id = this.navParams.get("note_id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteGuestsPage');
  }

  ionViewWillEnter(){
    this.noteProvider.getAllGuestsByNoteIdAndHost(this.note_id, firebase.auth().currentUser.email).subscribe(
      (guests) =>{ this.guests = guests; console.log(guests)},
      (error) => {console.log(error)}
    );
  }

}
