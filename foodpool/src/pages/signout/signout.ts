import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { CreateShopPage } from '../create-shop/create-shop';
import { ShopInfo, Configuration, UserInfo } from '../../models/models';
import { HttpClient } from '@angular/common/http';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'signout',
  templateUrl: 'signout.html'
})
export class SignoutPage {

  constructor(private http: HttpClient, public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl.setRoot(HelloIonicPage);
  }
}
