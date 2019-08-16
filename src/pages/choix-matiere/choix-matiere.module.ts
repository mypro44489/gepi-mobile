import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoixMatierePage } from './choix-matiere';

@NgModule({
  declarations: [
    ChoixMatierePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoixMatierePage),
  ],
})
export class ChoixMatierePageModule {}
