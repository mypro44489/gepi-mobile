import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ChoixClassePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choix-classe',
  templateUrl: 'choix-classe.html',
})
export class ChoixClassePage {

  items: any;
  classes: any = [];
  choixValue: any = null;
  m: string = "classes/all";
  relationship: any;
  //affectImpot: any;
  classe: any={ID:null};
  gotoPage1: any;
  gotoPage: any;
  constructor(
    private apiProvider: ApiProvider,
    private storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.gotoPage1 = this.navParams.get("page1");
    this.gotoPage = this.navParams.get("page");
  }
  ionViewWillEnter() {
    this.getClasse();
  }

  choix(obj) {
    console.log(obj);
    this.choixValue = obj;
    this.classe = obj;
    // alert(this.relationship);
  }

  continue() {
    this.storage.set("choixClasse", this.classe);
    this.navCtrl.push(this.gotoPage1, {"classe":this.choixValue, "page":this.gotoPage});
   
    //this.view.dismiss();
  }

  getClasse() {
   // let p = "?profil=Classe";
    this.apiProvider.getRequest2(this.m).subscribe(data => {
      console.log(data);
      let datas = JSON.parse(data["_body"]);
      if(datas.results!==null) this.classes = datas.results;
    }, err => {
      console.log(err);
    });
  }

  getItems(ev) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.classes = this.classes.filter((item) => {
        return (item.LIBELLECLASSE.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.getClasse();
    }
  }

  closeModal() {
    //this.view.dismiss();
    this.navCtrl.pop();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoisirClassePage');
  }

}
