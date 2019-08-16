import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ChoixElevePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choix-eleve',
  templateUrl: 'choix-eleve.html',
})
export class ChoixElevePage {

  items: any;
  eleves: any = [];
  choixValue: any = null;
  m: string = "users/profil";
  relationship: any;
  //affectImpot: any;
  eleve: any={ID:null};
  gotoPage: any;
  classe: any;
  constructor(
    private apiProvider: ApiProvider,
    private storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.gotoPage = this.navParams.get("page");
    this.classe = this.navParams.get("classe");
  }
  ionViewWillEnter() {
    this.getEleve();
  }

  choix(obj) {
    console.log(obj);
    this.choixValue = obj;
    this.eleve = obj;
    // alert(this.relationship);
  }

  continue() {
    this.storage.set("choixEleve", this.eleve);
    this.navCtrl.push(this.gotoPage, {"eleve":this.choixValue});
   
    //this.view.dismiss();
  }

  getEleve() {
    let p = "?profil=Eleve&classe="+this.classe.ID;
    this.apiProvider.getRequest2(this.m+p).subscribe(data => {
      console.log(data);
      let datas = JSON.parse(data["_body"]);
      if(datas.results!==null) this.eleves = datas.results;
    }, err => {
      console.log(err);
    });
  }

  getItems(ev) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.eleves = this.eleves.filter((item) => {
        return (item.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.getEleve();
    }
  }

  closeModal() {
    //this.view.dismiss();
    this.navCtrl.pop();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoisirElevePage');
  }

}
