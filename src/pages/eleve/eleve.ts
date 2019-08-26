import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../home/home';

/**
 * Generated class for the ElevePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eleve',
  templateUrl: 'eleve.html',
})
export class ElevePage {
  m: string="users/listbyparent";
  eleves: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public global:GlobalProvider,
    private apiProvider: ApiProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElevePage');
    this.getEleve();
  }

  getEleve() {
    let p = "?parentId="+this.global.session.id;
    this.apiProvider.getRequest2(this.m+p).subscribe(data => {
      console.log(data);
      let datas = JSON.parse(data["_body"]);
      if(datas.results!==null) this.eleves = datas.results;
    }, err => {
      console.log(err);
    });
  }
  gotomenu(obj){
    this.global.eleve=obj;
    this.navCtrl.push(HomePage);
  }

}
