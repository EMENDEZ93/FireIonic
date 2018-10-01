import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {NoteProvider} from "../../services/note/note";
import {NotesPage} from "../notes/notes";
import firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-note-form',
  templateUrl: 'note-form.html',
})
export class NoteFormPage {

  note
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public noteProvider: NoteProvider, public viewController: ViewController) {
    this.note = this.navParams.get("note");
  }

  ionViewWillLoad() {
    const note = this.navParams.get('note');
    console.log(note);
  }

  deleteNote(){
    this.noteProvider.deleteNote(this.note.id).subscribe();
    this.navCtrl.push(NotesPage);
  }

  saveNote(note){
    if(!note.idFirebase) {
      note.idFirebase = firebase.auth().currentUser.uid;
    }
    this.noteProvider.saveNote(note);
    this.navCtrl.pop();
  }

  closeNoteFormModal(){
    this.viewController.dismiss();
  }

}
