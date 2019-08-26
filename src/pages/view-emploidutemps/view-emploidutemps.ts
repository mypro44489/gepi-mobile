import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the ViewEmploidutempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-emploidutemps',
  templateUrl: 'view-emploidutemps.html',
})
export class ViewEmploidutempsPage {
  jours: any = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI']
  periodes: any;
  matieres: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private apiProvider: ApiProvider,
  ) {
  }

  getPeriodes() {
    this.apiProvider.getRequest2("periodes/all").subscribe(data => {
      console.log(data);
      this.periodes = JSON.parse(data["_body"]);
    }, err => {
      console.log(err);
    });
  }

  getMatieres() {
    this.apiProvider.getRequest2("matieres/all").subscribe(data => {
      console.log(data);
      let datas: any;
      datas = JSON.parse(data["_body"]);
      this.matieres = datas.results;
    }, err => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    this.getPeriodes();
    this.getMatieres();
    console.log('ionViewDidLoad ViewEmploidutempsPage');
  }

}
