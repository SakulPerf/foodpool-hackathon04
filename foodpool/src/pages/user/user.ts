import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { CreateShopPage } from '../create-shop/create-shop';
import { ShopInfo, Configuration, UserInfo } from '../../models/models';
import { HttpClient } from '@angular/common/http';
import { ShopDetailPage } from '../shop-detail/shop-detail';

@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserPage {

  newUsername: string;
  user: UserInfo[] = [];

  constructor(private http: HttpClient, public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.http.get<UserInfo[]>('https://foodpoll.azurewebsites.net/api/Foodpoll/ListMembers').subscribe(result => {
      this.user = result;
    }, error => console.error(error));
  }

  AddNewUser() {
    var newUser = new UserInfo();
    newUser.name = this.newUsername;
    this.user.push(newUser);
    this.http.get<UserInfo>('https://foodpoll.azurewebsites.net/api/Foodpoll/AddMember/'+this.newUsername).subscribe(result => {
      newUser._id = result._id;
    }, error => console.error(error));
  }

  DeleteUser(selectedUser: UserInfo){
    const index: number = this.user.indexOf(selectedUser);
    if (index !== -1) {
        this.user.splice(index, 1);
    }  
    this.http.get('https://foodpoll.azurewebsites.net/api/Foodpoll/DeleteMember/'+selectedUser._id).subscribe(result => {
    }, error => console.error(error));
  }
}
