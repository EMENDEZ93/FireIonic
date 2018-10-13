import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {FriendRequest} from "../../../models/friend/friend-request/friend_request";

@Injectable()
export class FriendsService {

  constructor(public httpClient: HttpClient){}

  getFriends(requester_email){
    return this.httpClient.get("http://fire-backend.herokuapp.com/get/all/friends/by/requester/email/"+requester_email+"/status/is/true");
  }

  getFindFriends(search_value, requester_email_except){
    return this.httpClient.get("https://fire-backend.herokuapp.com//get/find/friends/" + search_value + "/requester/email/except/" + requester_email_except);
  }

  getPendingFriendRequest(requester_email){
    return this.httpClient.get("https://fire-backend.herokuapp.com/get/all/friends/by/requester/email/" + requester_email + "/status/is/false")
  }

  postFriendRequest(friend_request: FriendRequest){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.httpClient
      .post('https://fire-backend.herokuapp.com/post/friend',
        JSON.stringify(friend_request), httpOptions).subscribe();
  }

  deleteFriendRecordRequesterAndRequested(requester_email, requested_email){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.httpClient
      .delete('https://fire-backend.herokuapp.com/delete/friend/record/requester/'+ requester_email + '/requested/' + requested_email, httpOptions).subscribe();
  }


  getAllFriendByRequestedEmailAndStatusIsFalse(requested_email){
    return this.httpClient.get("https://fire-backend.herokuapp.com/get/all/friends/by/requested/email/"+ requested_email +"/status/is/false");
  }

}

