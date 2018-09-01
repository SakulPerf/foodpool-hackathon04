import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { CreatePollPage } from '../create-poll/create-poll';
import { HttpClient } from '@angular/common/http';
import { PollInfo, Configuration } from '../../models/models';

@Component({
  selector: 'today',
  templateUrl: 'today.html'
})
export class TodayPage {

  polls: PollInfo[];

  constructor(private http: HttpClient, public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.http.get<PollInfo[]>('https://foodpoll.azurewebsites.net/api/Foodpoll/GetActivePoll/' + Configuration.currentUsername).subscribe(result => {
      this.polls = result;
    }, error => console.error(error));
  }

  CreateNewPoll(){
    const popover = this.popoverCtrl.create(CreatePollPage);
    popover.present();
  }

  SelectedPoll(pollId: string){
    console.log("SELECTED POLL");
  }

  ClosePoll(pollId: string){
    console.log("CLOSE POLL");
  }

  DeletePoll(poll: PollInfo){
    var pollId = poll._id;
    this.http.get('https://foodpoll.azurewebsites.net/api/Foodpoll/DeletePoll/' + pollId).subscribe(result => {
      const index: number = this.polls.indexOf(poll);
      if (index !== -1) {
          this.polls.splice(index, 1);
      }  
    }, error => console.error(error));
  }
}
