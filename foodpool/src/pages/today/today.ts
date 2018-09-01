import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { CreatePollPage } from '../create-poll/create-poll';

@Component({
  selector: 'today',
  templateUrl: 'today.html'
})
export class TodayPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
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

  CreateNewPoll(){
    const popover = this.popoverCtrl.create(CreatePollPage);
    popover.present();
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
