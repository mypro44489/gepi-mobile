import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Http } from '@angular/http';
import { AddAbscencePage } from '../add-abscence/add-abscence';
import { ChoixElevePage } from '../choix-eleve/choix-eleve';
import { GlobalProvider } from '../../providers/global/global';
import { ChoixClassePage } from '../choix-classe/choix-classe';

/**
 * Generated class for the AbscencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abscence',
  templateUrl: 'abscence.html',
})
export class AbscencePage {

  items: any;
  abscences: any = [];

  m: string = "abscences/";
  req: number;
  //host="http://localhost/gepi-mobile-api/api/web/v1/";
  constructor(public alertCtrl: AlertController,
    private apiProvider: ApiProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public global: GlobalProvider,
    public toastCtrl: ToastController,
    public http: Http) {
  }

  ionViewDidLoad() {
    if (this.global.accessLevel == 'Parent' || this.global.accessLevel == 'Eleve') {
      this.req = 2;
    } else {
      this.req = 1;
    }
  }

  getAbscences2() {
    let p = "?eleveId=" + this.global.eleve.id;
    this.apiProvider.getRequest2(this.m + "byeleve" + p).subscribe(data => {
      console.log(data);
      this.abscences = JSON.parse(data["_body"]);
    }, err => {
      console.log(err);
    });
  }
  getAbscences1() {
    this.apiProvider.getRequest2(this.m + "all").subscribe(data => {
      console.log(data);
      this.abscences = JSON.parse(data["_body"]);
    }, err => {
      console.log(err);
    });
  }
  getAbscences() {
    if (this.req == 1) {
      this.getAbscences1();
    } else {
      this.getAbscences2();
    }
  }

  ionViewWillEnter() {
    this.getAbscences();
  }

  getItems(ev) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.abscences = this.abscences.filter((item) => {
        return (item.nif.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getAbscences();
    }
  }
  presentTost(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      cssClass: 'dark-trans',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    toast.present();
  }

  deleteObject(obj) {
    this.apiProvider.deleteRequestById(this.m, obj.ID).subscribe(data => {
      console.log(data);
      this.presentTost('Suppression d\'une Absence effctuées');
      this.removeLigne(obj);

    }, err => {
      console.log(err);
    });
  }

  removeLigne(obj) {
    let index = this.abscences.indexOf(obj);
    if (index > -1) {
      this.abscences.splice(index, 1);
    }
  }

  supprConfirm(obj) {
    const confirm = this.alertCtrl.create({
      title: 'Supprimer',
      message: 'Voulez vous vraiment supprimer cet absence?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            console.log('Desagree clicked');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            this.deleteObject(obj);

          }
        }
      ]
    });
    confirm.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getAbscences();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ajouter() {
    this.navCtrl.push(ChoixClassePage, { "page1": ChoixElevePage, "page": AddAbscencePage });
  }
  modifier(obj) {
    console.log(obj);
    //this.navCtrl.push(UpdateAbscencesPage, { "obj": obj });
  }

}
