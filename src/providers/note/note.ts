import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

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

}
