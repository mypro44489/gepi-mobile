import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoixElevePage } from './choix-eleve';

@NgModule({
  declarations: [
    ChoixElevePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoixElevePage),
  ],
})
export class ChoixElevePageModule {}
