import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class NotesService {

  constructor(public httpClient: HttpClient){
  }

  getNotesByIdFirabase(idFirebase){
    return this.httpClient.get("https://fire-backend.herokuapp.com/notes/user/" + idFirebase);
  }

  deleteNote(id){
    return this.httpClient.get("https://fire-backend.herokuapp.com/note/" + id + "/delete");
  }

  postNote(note) {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.httpClient
      .post('https://fire-backend.herokuapp.com/note/save',
        JSON.stringify(note), httpOptions).subscribe();
  }

}
