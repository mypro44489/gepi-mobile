import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from "@ionic/storage";
import { AddNotePage } from '../add-note/add-note';
import { ChoixClassePage } from '../choix-classe/choix-classe';
import { ChoixElevePage } from '../choix-eleve/choix-eleve';

/**
 * Generated class for the ChoixMatierePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choix-matiere',
  templateUrl: 'choix-matiere.html',
})
export class ChoixMatierePage {

  items: any;
  matieres: any = [];
  choixValue: any = null;
  m: string = "matieres/all";
  relationship: any;
  //affectImpot: any;
  matiere: any={ID:null};
  Page1: any=ChoixElevePage;
  Page: any=AddNotePage;
  constructor(
    private apiProvider: ApiProvider,
    private storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }
  ionViewWillEnter() {
    this.getMatiere();
  }

  choix(obj) {
    console.log(obj);
    this.choixValue = obj;
    this.matiere = obj;
    // alert(this.relationship);
  }

  continue() {
    this.storage.set("choixMatiere", this.matiere);
    this.navCtrl.push(ChoixClassePage, {"page1":this.Page1, "page":this.Page});
   
    //this.view.dismiss();
  }

  getMatiere() {
   // let p = "?profil=Matiere";
    this.apiProvider.getRequest2(this.m).subscribe(data => {
      console.log(data);
      let datas = JSON.parse(data["_body"]);
      if(datas.results!==null) this.matieres = datas.results;
    }, err => {
      console.log(err);
    });
  }

  getItems(ev) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.matieres = this.matieres.filter((item) => {
        return (item.LIBELLEMATIERE.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.getMatiere();
    }
  }

  closeModal() {
    //this.view.dismiss();
    this.navCtrl.pop();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoisirMatierePage');
  }

}
