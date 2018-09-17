import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteProvider } from "../../providers/note/note";

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  notes

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public noteProvider: NoteProvider) {
  }

  ionViewDidLoad() {
    this.noteProvider.getNotes().subscribe(
      (data) =>{ this.notes = data; },
      (error) => {console.log(error)}
    );
  }

}
