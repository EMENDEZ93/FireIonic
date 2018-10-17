import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class InvitationService {

  constructor(public httpClient: HttpClient){
  }

  getInvitationStatusByNoteIdAndGuest(note_id, guest_email){
    return this.httpClient
      .get("https://fire-backend.herokuapp.com/get/invitation/status/by/noteid/" + note_id + "/and/guest/" + guest_email );
  }

}
