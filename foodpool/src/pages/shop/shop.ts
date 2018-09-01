import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { CreateShopPage } from '../create-shop/create-shop';
import { ShopInfo, Configuration } from '../../models/models';
import { HttpClient } from '@angular/common/http';
import { ShopDetailPage } from '../shop-detail/shop-detail';

@Component({
  selector: 'shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  shops: ShopInfo[];

  constructor(private http: HttpClient, public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    this.http.get<ShopInfo[]>('https://foodpoll.azurewebsites.net/api/Foodpoll/ListShop/' + Configuration.currentUsername).subscribe(result => {
      this.shops = result;
    }, error => console.error(error));
  }

  AddNewShop() {
    const popover = this.popoverCtrl.create(CreateShopPage);
    popover.present();
  }

  itemTapped(event, item) {
    this.navCtrl.push(ShopDetailPage, {
      shopId: item._id
    });
  }
}
