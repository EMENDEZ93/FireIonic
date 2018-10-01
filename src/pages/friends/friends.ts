import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FriendsService} from "../../services/tabs/friends/friends.service";

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  friends;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public friendsService: FriendsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

  ionViewWillEnter(){
    this.friendsService.getFriends().subscribe(
      (friends) =>{ this.friends = friends; },
      (error) => {console.log(error)}
    );
  }


}
