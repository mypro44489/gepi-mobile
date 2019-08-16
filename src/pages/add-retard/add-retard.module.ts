import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRetardPage } from './add-retard';

@NgModule({
  declarations: [
    AddRetardPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRetardPage),
  ],
})
export class AddRetardPageModule {}
