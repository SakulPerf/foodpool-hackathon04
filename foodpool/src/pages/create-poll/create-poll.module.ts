import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePollPage } from './create-poll';

@NgModule({
  declarations: [
    CreatePollPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePollPage),
  ],
})
export class CreatePollPageModule {}
