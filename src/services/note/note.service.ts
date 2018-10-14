import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Invitation} from "../../models/note/note-invitation/invitation";

@Injectable()
export class NoteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NoteProvider Provider');
  }

  getNotesByIdFirabase(idFirebase){
    return this.http.get("https://fire-backend.herokuapp.com/notes/user/"+idFirebase);
  }

  deleteNote(id){
    return this.http.get("https://fire-backend.herokuapp.com/note/" +id+"/delete");
  }

  saveNote(note) {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http
      .post('https://fire-backend.herokuapp.com/note/save',
        JSON.stringify(note), httpOptions).subscribe();
  }

  postInvitation(invitation: Invitation){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post('https://fire-backend.herokuapp.com/post/invitation',
      JSON.stringify(invitation), httpOptions);
  }

  getPendingInvitationsToNotesByGuest(guest_email){
    return this.http.get("https://fire-backend.herokuapp.com/get/pending/invitations/to/notes/by/guest/" + guest_email);
  }

}
