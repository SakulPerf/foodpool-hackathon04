import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { ShopDetailPage } from '../shop-detail/shop-detail';

@Component({
  selector: 'create-shop',
  templateUrl: 'create-shop.html'
})
export class CreateShopPage {
  
  name: string;
  detail: string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  AddNewShop(){
    this.viewCtrl.dismiss();
    this.navCtrl.push(ShopDetailPage);
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
