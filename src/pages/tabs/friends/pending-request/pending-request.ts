import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FriendsService} from "../../../../services/tabs/friends/friends.service";
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-pending-request',
  templateUrl: 'pending-request.html',
})
export class PendingRequestPage {

  pendingFriends;

  constructor(public navCtrl: NavController, public navParams: NavParams, public friendsService: FriendsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingRequestPage');
  }

  ionViewWillEnter(){
    this.getPendingFriendRequest();
  }


  getPendingFriendRequest(){
    this.friendsService.getPendingFriendRequest(firebase.auth().currentUser.email).subscribe(
    (pendingFriends) =>{ this.pendingFriends = pendingFriends; },
    (error) => {console.log(error)}
    );
  }

  closePendingRequestPage(){
    this.navCtrl.pop();
  }

  deleteFriendRecordRequesterAndRequested(requested_email){
    this.friendsService.deleteFriendRecordRequesterAndRequested(firebase.auth().currentUser.email,requested_email);
  }

}
