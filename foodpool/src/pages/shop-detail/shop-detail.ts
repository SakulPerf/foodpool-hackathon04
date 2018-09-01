import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { HttpClient } from '@angular/common/http';
import { ShopInfo, Configuration } from '../../models/models';

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

  DeleteShop() {
    console.log("Delete shop");
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
