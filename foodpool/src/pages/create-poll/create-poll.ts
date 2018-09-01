import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { HttpClient } from '@angular/common/http';
import { ShopInfo, Configuration } from '../../models/models';

@Component({
  selector: 'create-poll',
  templateUrl: 'create-poll.html'
})
export class CreatePollPage {

  selectedShopId: string;
  name: string;
  detail: string;
  shops: ShopInfo[];

  constructor(private http: HttpClient, public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.http.get<ShopInfo[]>('https://foodpoll.azurewebsites.net/api/Foodpoll/ListShop/' + Configuration.currentUsername).subscribe(result => {
      this.shops = result;
    }, error => console.error(error));
  }

  createNewPoll(){
    console.log(this.selectedShopId);
    /*
    this.http.post('https://foodpoll.azurewebsites.net/api/Foodpoll/CreateShop',
    { 
      "name": this.name,
      "detail": this.detail,
    }).subscribe(result => {
      
      var response = result as any;
      this.viewCtrl.dismiss();
      this.navCtrl.push(ShopDetailPage, { shopId: response._id});
    }, error => console.error(error));
    */
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
