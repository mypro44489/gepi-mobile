import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassePage } from './classe';

@NgModule({
  declarations: [
    ClassePage,
  ],
  imports: [
    IonicPageModule.forChild(ClassePage),
  ],
})
export class ClassePageModule {}
