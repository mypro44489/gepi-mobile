import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { NotificationPage } from '../notification/notification';
import { NotePage } from '../note/note';
import { AbscencePage } from '../abscence/abscence';
import { RetardPage } from '../retard/retard';
import { EmploiedutempsPage } from '../emploiedutemps/emploiedutemps';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	// chatsPage=ChatsPage;
	// peoplePage=PeoplePage;
	constructor(public global:GlobalProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
 

  openPage(index) {
    var pages=[ AbscencePage, RetardPage, NotePage, NotificationPage, EmploiedutempsPage];
    this.navCtrl.push(pages[index]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
