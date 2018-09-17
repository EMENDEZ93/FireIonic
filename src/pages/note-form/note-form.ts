import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NoteProvider} from "../../providers/note/note";

@IonicPage()
@Component({
  selector: 'page-note-form',
  templateUrl: 'note-form.html',
})
export class NoteFormPage {

  note
  //id: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public noteProvider: NoteProvider) {
    this.note = this.navParams.get("note");
  }

  ionViewDidLoad() {
    //this.note = this.noteProvider.getNote(this.id)[0];
    //console.log(this.noteProvider.getNote(this.id)[0]);
  }

  deleteNote(){
    this.noteProvider.deleteNote(this.note.id).subscribe();
    this.navCtrl.pop()
  }

}
