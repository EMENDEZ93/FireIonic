import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {FriendRequest} from "../../../models/friend/friend-request/friend_request";

@Injectable()
export class FriendsService {

  constructor(public httpClient: HttpClient){}

  getFriends(){
    return this.httpClient.get("https://fire-backend.herokuapp.com/users")
  }

  getFindFriends(search_value){
    return this.httpClient.get("https://fire-backend.herokuapp.com/get/find/friends/" + search_value)
  }

  getPendingFriendRequest(){
    return this.httpClient.get("https://fire-backend.herokuapp.com/get/friends/requests")
  }

  postFriendRequest(friend_request: FriendRequest){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.httpClient
      .post('https://fire-backend.herokuapp.com/post/friend',
        JSON.stringify(friend_request), httpOptions).subscribe();
  }


}
