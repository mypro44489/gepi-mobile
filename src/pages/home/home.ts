import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ChatsPage } from '../chats/chats';
// import { PeoplePage } from '../people/people';
import { GlobalProvider } from '../../providers/global/global';
import { ClassePage } from '../classe/classe';
//import { SettingsPage } from '../settings/settings';
import { ElevePage } from '../eleve/eleve';
import { MatierePage } from '../matiere/matiere';
import { PeriodePage } from '../periode/periode';
import { NotificationPage } from '../notification/notification';
import { EmploiedutempsPage } from '../emploiedutemps/emploiedutemps';
import { NotePage } from '../note/note';
import { AbscencePage } from '../abscence/abscence';
import { RetardPage } from '../retard/retard';
import { CahierTextPage } from '../cahier-text/cahier-text';
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
    var pages=[ AbscencePage, RetardPage, NotePage, NotificationPage];
    this.navCtrl.push(pages[index]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
