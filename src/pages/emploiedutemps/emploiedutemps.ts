import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Http } from '@angular/http';
import { GlobalProvider } from '../../providers/global/global';
import { ViewEmploidutempsPage } from '../view-emploidutemps/view-emploidutemps';

/**
 * Generated class for the EmploiedutempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-emploiedutemps',
	templateUrl: 'emploiedutemps.html',
})
export class EmploiedutempsPage {

	items: any;
	classes: any = [];

	m: string = "classes/";
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
	}

	// getemplois() {
	// 	let p = "?classeId=" + this.global.eleve.id;
	// 	this.apiProvider.getRequest2(this.m + "byeleve" + p).subscribe(data => {
	// 		console.log(data);
	// 		this.classes = JSON.parse(data["_body"]);
	// 	}, err => {
	// 		console.log(err);
	// 	});
	// }
	getclasses() {
		this.apiProvider.getRequest2("classes/all").subscribe(data => {
			console.log(data);
			let datas:any;
			 datas = JSON.parse(data["_body"]);
			 this.classes = datas.results;
		}, err => {
			console.log(err);
		});
	}

	ionViewWillEnter() {
		this.getclasses();
	}

	getItems(ev) {
		// set val to the value of the searchbar
		const val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.classes = this.classes.filter((item) => {
				return (item.nif.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		} else {
			this.getclasses();
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
		let index = this.classes.indexOf(obj);
		if (index > -1) {
			this.classes.splice(index, 1);
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
		this.getclasses();
		setTimeout(() => {
			console.log('Async operation has ended');
			refresher.complete();
		}, 2000);
	}

	gotoview(obj){
	  this.navCtrl.push(ViewEmploidutempsPage, {"classeId":obj.ID});
	}

	modifier(obj) {
		console.log(obj);
		//this.navCtrl.push(UpdateclassesPage, { "obj": obj });
	}


}
