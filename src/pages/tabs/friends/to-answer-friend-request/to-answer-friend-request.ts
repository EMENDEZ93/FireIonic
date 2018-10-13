import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FriendsService} from "../../../../services/tabs/friends/friends.service";
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-to-answer-friend-request',
  templateUrl: 'to-answer-friend-request.html',
})
export class ToAnswerFriendRequestPage {

  pending_friends;

constructor(public navCtrl: NavController, public navParams: NavParams, public friendsService: FriendsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToAnswerFriendRequestPage');
  }

  ionViewWillEnter(){
    this.getAllFriendByRequestedEmailAndStatusIsFalse();
  }

  closeToAnswerFriendRequestPage(){
    this.navCtrl.pop();
  }

  getAllFriendByRequestedEmailAndStatusIsFalse(){
    this.friendsService.getAllFriendByRequestedEmailAndStatusIsFalse(firebase.auth().currentUser.email).subscribe(
      (pending_friends) =>{ this.pending_friends = pending_friends },
      (error) => {console.log(error)}
    );
  }

}
