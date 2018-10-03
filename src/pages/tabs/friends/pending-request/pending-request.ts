import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FriendsService} from "../../../../services/tabs/friends/friends.service";


@IonicPage()
@Component({
  selector: 'page-pending-request',
  templateUrl: 'pending-request.html',
})
export class PendingRequestPage {

  pendingFriendRequest;

  constructor(public navCtrl: NavController, public navParams: NavParams, public friendsService: FriendsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingRequestPage');
  }

  getPendingFriendRequest(){
    this.getPendingFriendRequest();
  }

}
