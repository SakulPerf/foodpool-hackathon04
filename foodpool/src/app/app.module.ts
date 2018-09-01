import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreatePollPage } from '../pages/create-poll/create-poll';

import { TodayPage } from '../pages/today/today'
import { ShopPage } from '../pages/shop/shop';
import { ShopDetailPage } from '../pages/shop-detail/shop-detail';
import { CreateShopPage } from '../pages/create-shop/create-shop';
import { HttpClientModule } from '@angular/common/http';
import { UserPage } from '../pages/user/user';
import { SignoutPage } from '../pages/signout/signout';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CreatePollPage,
    TodayPage,
    ShopPage,
    ShopDetailPage,
    CreateShopPage,
    UserPage,
    SignoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    CreatePollPage,
    ItemDetailsPage,
    ListPage,
    TodayPage,
    ShopPage,
    ShopDetailPage,
    CreateShopPage,
    UserPage,
    SignoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
