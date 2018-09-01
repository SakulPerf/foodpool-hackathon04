import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { HttpClient } from '@angular/common/http';
import { ShopInfo } from '../../models/models';

@Component({
  selector: 'shop-detail',
  templateUrl: 'shop-detail.html'
})
export class ShopDetailPage {

  shopInfo: ShopInfo;

  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    var shopId = navParams.get('shopId');

    this.http.get<ShopInfo>('https://foodpoll.azurewebsites.net/api/Foodpoll/GetShop/'+shopId+'/AU').subscribe(result => {
      this.shopInfo = result;
    }, error => console.error(error));

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  AddNewMenu(){
  }

  SaveChanged(){
    console.log("Save changed");
  }

  DeleteShop(){
    console.log("Delete shop");
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
