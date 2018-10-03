import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FriendsService} from "../../../../services/tabs/friends/friends.service";
import firebase from 'firebase';
import {FriendRequest} from "../../../../models/friend/friend-request/friend_request";

@IonicPage()
@Component({
  selector: 'page-friend-request',
  templateUrl: 'friend-request.html',
})
export class FriendRequestPage {

  found_users;
  search_value: string;
  friend_request = {} as FriendRequest;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public friendsService: FriendsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendRequestPage');
  }

  closeFriendRequestPageModal(){
    this.navCtrl.pop();
  }

  searcher(){
    this.friendsService.getFindFriends(this.search_value).subscribe(
      (found_users) => {
        this.found_users = found_users;
      },
      (error) => {
        console.log(error)
      });
  }

  sendFriendRequest(requested){
    this.friend_request.requester = firebase.auth().currentUser.email;
    this.friend_request.requested = requested;
    this.friend_request.requestStatus = false;
    this.friendsService.postFriendRequest(this.friend_request);
  }

}
