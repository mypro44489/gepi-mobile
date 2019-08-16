import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeriodePage } from './periode';

@NgModule({
  declarations: [
    PeriodePage,
  ],
  imports: [
    IonicPageModule.forChild(PeriodePage),
  ],
})
export class PeriodePageModule {}
