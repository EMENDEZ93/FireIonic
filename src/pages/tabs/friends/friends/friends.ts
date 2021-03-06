import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {FriendsService} from "../../../../services/tabs/friends/friends.service";
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  friends;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public friendsService: FriendsService, public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

  ionViewWillEnter(){
    this.friendsService.getFriends(firebase.auth().currentUser.email).subscribe(
      (friends) =>{ this.friends = friends; },
      (error) => {console.log(error)}
    );
  }

  openFindFriendModal(){
    const friendRequestPageModal = this.modal.create('FriendRequestPage');
    friendRequestPageModal.present();
  }

  openPendingFriendRequestModal(){
    const pendingRequestPageModal = this.modal.create('PendingRequestPage');
    pendingRequestPageModal.present();
  }

  openToAnswerFriendRequestPageModal(){
    const toAnswerFriendRequestPagesModal = this.modal.create('ToAnswerFriendRequestPage');
    toAnswerFriendRequestPagesModal.present();
  }

  deleteFriendRecordRequesterAndRequested(requested_email){
    this.friendsService.deleteFriendRecordRequesterAndRequested(firebase.auth().currentUser.email,requested_email);
  }

}
