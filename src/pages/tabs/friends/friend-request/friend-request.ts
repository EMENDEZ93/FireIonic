import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FriendsService} from "../../../../services/tabs/friends/friends.service";

@IonicPage()
@Component({
  selector: 'page-friend-request',
  templateUrl: 'friend-request.html',
})
export class FriendRequestPage {

  found_users;
  search_value: string;

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

}
