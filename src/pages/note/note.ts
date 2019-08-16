import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { ChoixMatierePage } from '../choix-matiere/choix-matiere';
import { GlobalProvider } from '../../providers/global/global';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

  items: any;
  notes: any = [];

  m: string = "notes/";
  //host="http://localhost/gepi-mobile-api/api/web/v1/";
  constructor(public alertCtrl: AlertController,
    private apiProvider: ApiProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public global:GlobalProvider,
    public toastCtrl: ToastController,
    // http: Http
    ) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

  getNotes() {
    this.apiProvider.getRequest2(this.m+"all").subscribe(data => {
      console.log(data);
      this.notes = JSON.parse(data["_body"]);
    }, err => {
      console.log(err);
    });
  }

  ionViewWillEnter() {
    this.getNotes();
  }

  getItems(ev) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.notes = this.notes.filter((item) => {
        return (item.nif.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getNotes();
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
      this.presentTost('Suppression d\'une note effctuées');
      this.removeLigne(obj);

    }, err => {
      console.log(err);
    });
  }

  removeLigne(obj) {
    let index = this.notes.indexOf(obj);
    if (index > -1) {
      this.notes.splice(index, 1);
    }
  }

  supprConfirm(obj) {
    const confirm = this.alertCtrl.create({
      title: 'Supprimer',
      message: 'Voulez vous vraiment supprimer cette note ?',
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
    this.getNotes();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ajouter() {
    this.navCtrl.push(ChoixMatierePage);
  }
  modifier(obj) {
    console.log(obj);
    //this.navCtrl.push(UpdateNotesPage, { "obj": obj });
  }
}
