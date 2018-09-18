import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NoteProvider} from "../../providers/note/note";
import {NotesPage} from "../notes/notes";

@IonicPage()
@Component({
  selector: 'page-note-form',
  templateUrl: 'note-form.html',
})
export class NoteFormPage {

  note
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public noteProvider: NoteProvider) {
    this.note = this.navParams.get("note");
  }

  ionViewDidLoad() {
  }

  deleteNote(){
    this.noteProvider.deleteNote(this.note.id).subscribe();
    this.navCtrl.push(NotesPage);
  }

  saveNote(note){
    this.noteProvider.saveNote(note);
    this.navCtrl.push(NotesPage);

  }

}
