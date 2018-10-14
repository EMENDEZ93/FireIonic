import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {NotesService} from "../../../../services/tabs/notes/notes.service";
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  notes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService,
              public modal: ModalController) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    this.notesService.getNotesByIdFirabase(firebase.auth().currentUser.uid).subscribe(
      (data) =>{ this.notes = data; },
      (error) => {console.log(error)}
    );
  }


  editNoteForm(note){
    const noteFormPageModal = this.modal.create('NoteFormPage', {note: note});
    noteFormPageModal.present();
    noteFormPageModal.onDidDismiss((data) => {
      this.ionViewWillEnter();
    })
  }


  deleteNote(id){
    this.notesService.deleteNote(id).subscribe(value => {
      this.ionViewWillEnter();
    });
  }

  createNote(){
    this.editNoteForm({});
  }

  openNoteInvitationPageModal(){
    const noteInvitationPageModal = this.modal.create('NoteInvitationPage');
    noteInvitationPageModal.present();
  }

}
