import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class NoteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NoteProvider Provider');
  }

  getNotes(){
    return this.http.get("https://fire-backend.herokuapp.com/notes");
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

}
