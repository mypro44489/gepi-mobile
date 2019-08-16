import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewNotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-notification',
  templateUrl: 'view-notification.html',
})
export class ViewNotificationPage {
  notification: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notification = this.navParams.get("notification");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewNotificationPage');
  }

}
