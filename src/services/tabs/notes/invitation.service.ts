import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class InvitationService {

  constructor(public httpClient: HttpClient){
  }

  getChangeInvitationStatusByNodeIdAndGuestEmail(note_id, guest_email){
    return this.httpClient
      .get("https://fire-backend.herokuapp.com/get/change/invitation/status/by/nodeid/"+ note_id +"/and/guest/"+guest_email);
  }

}
