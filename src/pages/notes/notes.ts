import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteProvider } from "../../services/note/note";
import {NoteFormPage} from "../note-form/note-form";
import firebase from 'firebase';

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

  ionViewWillEnter(){
    this.noteProvider.getNotesByIdFirabase(firebase.auth().currentUser.uid).subscribe(
      (data) =>{ this.notes = data; },
      (error) => {console.log(error)}
    );
  }

  editNoteForm(note){
    this.navCtrl.push(NoteFormPage,{note: note})
  }


  newNoteForm(){
    this.navCtrl.push(NoteFormPage
      ,{note : {}})
  }


}
