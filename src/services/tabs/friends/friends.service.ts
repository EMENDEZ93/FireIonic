import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class FriendsService {

  constructor(public httpClient: HttpClient){}

  getFriends(){
    return this.httpClient.get("https://fire-backend.herokuapp.com/users")
  }

  getFindFriends(search_value){
    return this.httpClient.get("https://fire-backend.herokuapp.com/get/find/friends/" + search_value)
  }

}
