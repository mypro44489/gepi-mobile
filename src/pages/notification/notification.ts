import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AddNotificationPage } from '../add-notification/add-notification';
import { GlobalProvider } from '../../providers/global/global';
import { ApiProvider } from '../../providers/api/api';
import { ViewNotificationPage } from '../view-notification/view-notification';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  items: any;
  notifications: any = [];

  m: string = "notifications/";
  //host="http://localhost/gepi-mobile-api/api/web/v1/";
  constructor(public alertCtrl: AlertController,
    private apiProvider: ApiProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public global: GlobalProvider,
    public toastCtrl: ToastController,
    // http: Http
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  getNotifications() {
    this.apiProvider.getRequest2(this.m + "all").subscribe(data => {
      console.log(data);
      this.notifications = JSON.parse(data["_body"]);
    }, err => {
      console.log(err);
    });
  }

  detail(obj) {
    this.navCtrl.push(ViewNotificationPage, { "notification": obj });
  }
  
  ionViewWillEnter() {
    this.getNotifications();
  }

  getItems(ev) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.notifications = this.notifications.filter((item) => {
        return (item.contenu.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getNotifications();
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
      this.presentTost('Suppression d\'une notification effctuées');
      this.removeLigne(obj);

    }, err => {
      console.log(err);
    });
  }

  removeLigne(obj) {
    let index = this.notifications.indexOf(obj);
    if (index > -1) {
      this.notifications.splice(index, 1);
    }
  }

  supprConfirm(obj) {
    const confirm = this.alertCtrl.create({
      title: 'Supprimer',
      message: 'Voulez vous vraiment supprimer cette notification ?',
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
    this.getNotifications();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ajouter() {
    this.navCtrl.push(AddNotificationPage);
  }
  modifier(obj) {
    console.log(obj);
    //this.navCtrl.push(UpdateNotificationsPage, { "obj": obj });
  }
}
