import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { HttpClient } from '@angular/common/http';
import { ShopInfo, Configuration, ShopMenu } from '../../models/models';

@Component({
  selector: 'shop-detail',
  templateUrl: 'shop-detail.html'
})
export class ShopDetailPage {

  shopId: string;
  newMenuName: string;
  shopInfo: ShopInfo = new ShopInfo();

  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.shopId = navParams.get('shopId');
  }

  ionViewDidEnter() {
    this.http.get<ShopInfo>('https://foodpoll.azurewebsites.net/api/Foodpoll/GetShop/' + this.shopId + '/' + Configuration.currentUsername).subscribe(result => {
      this.shopInfo = result;
    }, error => console.error(error));
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

  deleteMenu(menu: ShopMenu){
    console.log("DELETE MENU: "+menu._id)
    this.http.get('https://foodpoll.azurewebsites.net/api/Foodpoll/DeleteMenu/' +this.shopId +'/'+menu._id).subscribe(result => {
      const index: number = this.shopInfo.menus.indexOf(menu);
      if (index !== -1) {
          this.shopInfo.menus.splice(index, 1);
      }  
    }, error => console.error(error));
  }

  DeleteShop() {
    console.log("DELETE SHOP: "+this.shopId)
    this.http.get('https://foodpoll.azurewebsites.net/api/Foodpoll/DeleteShop/' +this.shopId).subscribe(result => {
      this.navCtrl.pop();
    }, error => console.error(error));
  }
}
