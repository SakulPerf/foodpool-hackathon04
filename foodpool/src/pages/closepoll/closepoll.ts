import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { CreateShopPage } from '../create-shop/create-shop';
import { ShopInfo, Configuration, UserInfo, PollInfo } from '../../models/models';
import { HttpClient } from '@angular/common/http';
import { ShopDetailPage } from '../shop-detail/shop-detail';

@Component({
  selector: 'closepoll',
  templateUrl: 'closepoll.html'
})
export class ClosePollPage {

  polls:PollInfo[];

  constructor(private http: HttpClient, public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.http.get<PollInfo[]>('https://foodpoll.azurewebsites.net/api/Foodpoll/ListClosePoll/'+Configuration.currentUsername).subscribe(result => {
      this.polls = result;
    }, error => console.error(error));
  }

  GetYourOrderName(item: PollInfo) {
    var ordername;
    if (item.myOrder == null) {
      if (item.defaultMenu != null) ordername = item.defaultMenu.name
    }
    else ordername = item.myOrder.name;

    if (ordername == null) ordername = "ไม่ได้เลือก";
    return ordername;
  }

}
