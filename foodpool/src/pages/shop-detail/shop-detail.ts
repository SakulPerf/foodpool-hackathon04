import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { HttpClient } from '@angular/common/http';
import { ShopInfo, Configuration, ShopMenu, PollInfo } from '../../models/models';

@Component({
  selector: 'shop-detail',
  templateUrl: 'shop-detail.html'
})
export class ShopDetailPage {

  shopId: string;
  newMenuName: string;
  shopInfo: ShopInfo = new ShopInfo();
  pollInfo: PollInfo;

  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.shopId = navParams.get('shopId');
    this.pollInfo = navParams.get('pollInfo');
  }

  ionViewDidEnter() {
    if (this.pollInfo != null) {
      this.shopInfo = this.pollInfo.shop;
      this.setupDisplay();
    }
    else
    {
      this.http.get<ShopInfo>('https://foodpoll.azurewebsites.net/api/Foodpoll/GetShop/' + this.shopId + '/' + Configuration.currentUsername).subscribe(result => {
        this.shopInfo = result;
        this.setupDisplay();
      }, error => console.error(error));
    }
  }

  setupDisplay(){
    for (let entry of this.shopInfo.menus) {
      if (this.shopInfo.defaultMenu._id == entry._id) {
        entry.selecteddefault = true;
      }
    }

    if(this.pollInfo!=null){
      console.log("XXXXX: "+this.pollInfo.myDefaultMenu._id)
      for (let entry of this.shopInfo.menus) {
        if (this.pollInfo.myDefaultMenu._id == entry._id) {
          entry.selecteddefault = true;
        }
      }
    }
  }

  AddNewMenu() {
    this.http.post('https://foodpoll.azurewebsites.net/api/Foodpoll/AddMenu/' + Configuration.currentUsername, {
      "shopId": this.shopId,
      "menu": {
        "name": this.newMenuName
      }
    }).subscribe(result => {
      var response = result as ShopInfo;
      console.log(response)
      this.shopInfo = response;
    }, error => console.error(error));
  }

  deleteMenu(menu: ShopMenu) {
    console.log("DELETE MENU: " + menu._id)
    this.http.get('https://foodpoll.azurewebsites.net/api/Foodpoll/DeleteMenu/' + this.shopId + '/' + menu._id).subscribe(result => {
      const index: number = this.shopInfo.menus.indexOf(menu);
      if (index !== -1) {
        this.shopInfo.menus.splice(index, 1);
      }
    }, error => console.error(error));
  }

  DeleteShop() {
    console.log("DELETE SHOP: " + this.shopId)
    this.http.get('https://foodpoll.azurewebsites.net/api/Foodpoll/DeleteShop/' + this.shopId).subscribe(result => {
      this.navCtrl.pop();
    }, error => console.error(error));
  }


  changeDefault(item: ShopMenu) {
    for (let entry of this.shopInfo.menus) {
      if (item != entry) {
        entry.selecteddefault = false;
      }
    }

    this.http.get('https://foodpoll.azurewebsites.net/api/Foodpoll/SetDefaulMenu/' + this.shopId + '/' + item._id).subscribe(result => {
    }, error => console.error(error));
  }

  changeYourOrder(item: ShopMenu) {
    for (let entry of this.shopInfo.menus) {
      if (item != entry) {
        entry.youselect = false;
      }
    }

    this.http.get('https://foodpoll.azurewebsites.net/api/Foodpoll/SetDefaulMenu/' + this.shopId + '/' + item._id + '/' + Configuration.currentUsername).subscribe(result => {
    }, error => console.error(error));
  }
}
