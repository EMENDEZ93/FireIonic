import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotesService} from "../../services/tabs/notes/notes.service";
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  notes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    this.notesService.getNotesByIdFirabase(firebase.auth().currentUser.uid).subscribe(
      (data) =>{ this.notes = data; },
      (error) => {console.log(error)}
    );
  }

}
