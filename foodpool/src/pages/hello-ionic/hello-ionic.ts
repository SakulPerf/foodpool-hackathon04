import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodayPage } from '../today/today';
import { Configuration } from '../../models/models';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  username: string;

  constructor(public navCtrl: NavController) {
    Configuration.currentUsername = "AU";
  }

  login() {
    if (this.username != null) {
      this.navCtrl.setRoot(TodayPage);
    }
  }
}
