import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodayPage } from '../today/today';
import { Configuration } from '../../models/models';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  
  constructor(public navCtrl: NavController) {
    Configuration.currentUsername = "AU";
  }

  login(){
    this.navCtrl.push(TodayPage);
  }
}
