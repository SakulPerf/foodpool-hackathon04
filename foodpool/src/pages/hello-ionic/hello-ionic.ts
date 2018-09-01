import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodayPage } from '../today/today';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  
  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(TodayPage);
  }
}
