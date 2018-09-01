import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'create-shop',
  templateUrl: 'create-shop.html'
})
export class CreateShopPage {
  
  name: string;
  detail: string;

  constructor(private http: HttpClient, public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  AddNewShop(){
    this.http.post('https://foodpoll.azurewebsites.net/api/Foodpoll/CreateShop',
    { 
      "name": this.name,
      "detail": this.detail,
    }).subscribe(result => {
      
      var response = result as any;
      this.viewCtrl.dismiss();
      this.navCtrl.push(ShopDetailPage, { shopId: response._id});
    }, error => console.error(error));
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
