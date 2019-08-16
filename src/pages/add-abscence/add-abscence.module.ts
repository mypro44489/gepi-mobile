import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAbscencePage } from './add-abscence';

@NgModule({
  declarations: [
    AddAbscencePage,
  ],
  imports: [
    IonicPageModule.forChild(AddAbscencePage),
  ],
})
export class AddAbscencePageModule {}
